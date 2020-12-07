import cytoscape, { CytoscapeOptions } from 'cytoscape'
import COSEBilkent from 'cytoscape-cose-bilkent'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Duration } from 'luxon'

import { PortalSize, Zone } from '../types'

import zoneTiers from '../common/data/zoneTiers'
import useZoneListSelector from '../common/hooks/useZoneListSelector'
import { tiers } from '../common/images'
import getHomeZone from '../common/utils/getHomeZone'
import { RootState } from '../reducers'
import { PortalMapActionTypes } from '../reducers/portalMapReducer'
import ControlBar from './ControlBar'
import { changeScore } from './cytoUtils'
import defaultSettings from './defaultSettings'
import graphStyle from './graphStyle'
import { portalSizeToColor, zoneColorToColor } from './mapStyle'
import styles from './styles.module.scss'
import {act} from "react-dom/test-utils";

cytoscape.use(COSEBilkent)

interface CytoMapElement {
  added: boolean
  element: object
}

const updateLayout = {
  ...defaultSettings.layout,
  fit: false,
}

const future = Duration.fromObject({ hours: 500 }).as('milliseconds')

const getShape = (zone: Zone): string => {
  if (zone.type.includes('TUNNEL_HIDEOUT')) {
    return 'pentagon'
  }

  if (zone.type.includes('TUNNEL_')) {
    return 'cut-rectangle'
  }

  if (zone.color === 'city') {
    return 'star'
  }

  return ''
}

const PortalMap = () => {
  const dispatch = useDispatch()
  const zones = useZoneListSelector()
  const portals = useSelector((state: RootState) => state.portalMap.portals)

  const oldScore = useRef<number>(-1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const home = getHomeZone()

  const cy = useRef<any>(null)
  const elements = useRef<Map<string, CytoMapElement>>(new Map())

  const [score, setScore] = useState<number>(-1)
  const [remove, setRemove] = useState<string[]>([])
  const [activeZoneName, setActiveZoneName] = useState<string>('')
  const [activePortal, setActivePortal] = useState<string[] | undefined>()
  const activePortalZoneNames = zones.filter(z => activePortal && activePortal.indexOf(z.id) >= 0).map(z => z.name)

  const clearActives = useCallback(() => {
    setActiveZoneName('')
    setActivePortal(undefined)
  }, [])

  const activeZone = useMemo<Zone | null>(
    () => zones.find((z) => z.name === activeZoneName) ?? null,
    [zones, activeZoneName]
  )

  const cyTapHandler = useCallback(
    (e: cytoscape.EventObject) => {
      const t = e.target
      if (t === cy.current) {
        clearActives()
      }

      if (t.isNode()) {
        const name = e.target.data('zoneName')
        const id = e.target.data('zoneId')

        dispatch({ type: PortalMapActionTypes.INSPECT, inspectId: id })
        setActiveZoneName(name)
      } else if (t.isEdge()) {
        setActivePortal(t.data('portalId'))
      }

    },
    [clearActives, dispatch]
  )

  useEffect(() => {
    if (!cy.current) {
      cy.current = cytoscape({
        ...defaultSettings,
        style: graphStyle,
        container: containerRef.current,
      } as CytoscapeOptions)

      cy.current.on('tap', 'node', cyTapHandler)
      cy.current.on('tap', 'edge', cyTapHandler)
    } else {
      cy.current.style(graphStyle)
    }
  }, [cyTapHandler])

  const filteredZones = useMemo(
    () =>
      zones.filter(
        (z) =>
          !!portals?.find(
            (p) =>
              p.connection[0] === z.id ||
              p.connection[1] === z.id ||
              z.id === home.id
          )
      ),
    [zones, portals, home.id]
  )

  useEffect(() => {
    const elms = elements.current
    const allKeys: string[] = []

    if (filteredZones.length && cy.current) {
      filteredZones.forEach((z) => {
        // used to add portals first
        const id = z.id
        allKeys.push(id)

        const isHome = home.id === z.id

        const backgroundColor = zoneColorToColor[isHome ? 'home' : z.color]
        const width = isHome || z.color === 'city' ? 42 : 30
        const height = isHome || z.color === 'city' ? 42 : 30

        if (!elms.has(id)) {
          const zoneTier = zoneTiers.find(
            (zt) => zt.name.toLowerCase() === z.name.toLowerCase()
          )
          const imgUrl = zoneTier ? tiers[zoneTier.tier] : null
          const backgroundUrl = imgUrl ? `url(${imgUrl})` : 'none'

          elms.set(id, {
            added: false,
            element: {
              data: { id, zoneName: z.name, zoneId: z.id, label: z.name },
              css: {
                width,
                height,
                backgroundColor,
                'background-image': backgroundUrl,
                'background-height': height,
                'background-width': width,
                'background-repeat': 'no-repeat',
                'text-outline-color': '#222',
                'text-outline-width': 1,
                'text-outline-opacity': 0.5,
                'text-margin-y': -5,
                shape: getShape(z),
              },
            },
          })
        }
      })

      if (allKeys.length === 0 && home) {
        const id = home.id
        allKeys.push(id)

        const homeZone = zones.find((z) => z.id === home.id)

        if (homeZone) {
          elms.set(id, {
            added: false,
            element: {
              data: { id, zoneName: home.name, label: home.name },
              css: {
                width: 42,
                height: 42,
                backgroundColor: zoneColorToColor.home,
                shape: homeZone.type.includes('TUNNEL_HIDEOUT')
                  ? 'pentagon'
                  : homeZone.type.includes('TUNNEL_')
                  ? 'cut-rectangle'
                  : '',
              },
            },
          })
        }
      }

      portals.forEach((p) => {
        const source = p.connection[0]
        const target = p.connection[1]

        // just to fix the score if the characteres end up being the same, add k e y
        const id = p.connection.join('_')
        allKeys.push(id)

        const timeLeft = p.timeLeft * 1000

        const label =
          timeLeft > future
            ? ''
            : `${p.hours}h ${p.minutes}m`

        if (!elms.has(id)) {
          elms.set(id, {
            added: false,
            element: {
              data: {
                id,
                portalId: p.connection,
                source,
                target,
                label,
              },
              classes: p.timeLeft < 30 ? 'timeLow' : '',
              css: {
                lineColor: portalSizeToColor[p.size as PortalSize],
                width: 5,
                'text-outline-color': '#222',
                'text-outline-width': 2,
                'text-outline-opacity': 0.5,
              },
            },
          })
        } else {
          const updateElm = cy.current.$(`#${id}`)
          updateElm.data('label', label)
          updateElm.css('lineColor', portalSizeToColor[p.size as PortalSize])

          if (p.timeLeft < 30) {
            updateElm.addClass('timeLow')
          }
        }
      })

      const removeKeys: string[] = Array.from(elms.keys()).filter(
        (k) => !allKeys.includes(k)
      )

      if (removeKeys.length) {
        setRemove(removeKeys)
      }

      setScore(changeScore(allKeys))
    }
  }, [filteredZones, portals, zones, home])

  useEffect(() => {
    if (score !== oldScore.current) {
      const elms = elements.current

      // make sure we add the zones first, before the connetions
      const elmKeys = Array.from(elms.keys())//.sort((a, b) => a.localeCompare(b)) // TODO fix?

      let updated = false

      elmKeys.forEach((key) => {
        const elm = elms.get(key)

        if (elm && !elm.added) {
          cy.current.add(elm.element)
          elms.set(key, { added: true, element: { ...elm.element } })
          updated = true
        }
      })

      if (remove.length) {
        remove.forEach((k) => {
          if (home.id !== k) {
            cy.current.remove(cy.current.$(`#${k}`))
            elements.current.delete(k)
          }
        })

        updated = true
        setRemove([])
      }

      if (updated) {
        const layout =
          oldScore.current === -1 ? defaultSettings.layout : updateLayout

        cy.current.layout(layout).run()
      }

      oldScore.current = score
    }
  }, [score, remove, home.id])

  const handleHome = useCallback((zone: Zone) => {
    const home = cy.current.$(`#${zone.id}`)

    cy.current.zoom({ level: 1, position: home.position() }).center(home)
  }, [])

  const reloadMap = useCallback(() => {
    cy.current.layout(defaultSettings.layout).run()
  }, [])

  return (
    <div className={styles.mapContainer}>
      <ControlBar
        handleHome={handleHome}
        reloadMap={reloadMap}
        zone={activeZone || null}
        portalId={activePortal}
        portalZoneNames={activePortalZoneNames}
      />
      <div className={styles.cyto}>
        <div ref={containerRef} />
      </div>
    </div>
  )
}

export default PortalMap
