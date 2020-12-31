import React, {useCallback, useEffect, useState} from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Avatar, Button,
  Dialog,
  DialogTitle,
  List,
  ListItem, ListItemAvatar, ListItemText, MenuItem, Select,
} from "@material-ui/core";
import styles from './styles.module.scss'
import {Zone} from "../types";
import {fetchRouteToCity, fetchRouteToMarker, fetchRouteToZone} from "../common/utils/fetchRouting";
import ZoneSearch from "../ZoneSearch";
import {DEFAULT_ZONE} from "../common/data/constants";
import {CheckBox, CheckBoxOutlineBlank} from "@material-ui/icons";

interface FilterOption {
  text: string
  value: string
  selected: boolean
}

interface RoutingSettingsProps {
  open: boolean
  onClose: () => void
  filterOptions: FilterOption[]
  toggleFilter: (filterValue: string) => void
}

const RoutingSettings: React.FC<RoutingSettingsProps> = ({open, onClose, filterOptions, toggleFilter}) =>
  <Dialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>Select filter</DialogTitle>
    <List>
      {filterOptions.map(option => (
        <ListItem key={option.value} button onClick={() => toggleFilter(option.value)}>
          <ListItemAvatar>
            <Avatar>
              {(option.selected && <CheckBox />) || <CheckBoxOutlineBlank /> }
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option.text}/>
        </ListItem> ))}
    </List>
  </Dialog>

interface RoutingProps {
  fromZoneId: string
  zones: Zone[]
}

const FILTERS = [
  {
    value: "noroyal",
    text: "No royal zones"
  },
  {
    value: "noblack",
    text: "No black zones"
  },
  {
    value: "nobzcity",
    text: "No city portals to/from black zones"
  }
]

const activeFilterValues = (filters: FilterOption[]): string[] =>
  filters.filter(f => f.selected).map(f => f.value)



const minimapMarkerValues = [
  {value: "roads_of_avalon_solo_pve", name: "Green chest"},
  {value: "roads_of_avalon_group_pve", name: "Blue chest"},
  {value: "roads_of_avalon_raid_pve", name: "Gold chest"},
  {value: "dungeon_solo", name: "Static solo dungeon"},
  {value: "dungeon_group", name: "Static group dungeon"},
  {value: "dungeon_elite", name: "Static Avalonian dungeon"},
]

export const Routing: React.FC<RoutingProps> = ({fromZoneId, zones}) => {
  const [routeToCity, setRouteToCity] = useState<Zone[]>()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState(FILTERS.map(f => ({...f, selected: false})))
  useEffect(() => {
    if (fromZoneId !== '0' && isOpen) {
      fetchRouteToCity(fromZoneId, activeFilterValues(filters))
        .then(setRouteToCity)
        .catch(() => setRouteToCity([]))
    } else {
      setRouteToCity(undefined)
    }
  }, [fromZoneId, setRouteToCity, isOpen, filters])

  const [toZone, setToZone] = useState(DEFAULT_ZONE)
  const [routeToZone, setRouteToZone] = useState<Zone[]>()

  useEffect(() => {
    if (fromZoneId !== '0' && toZone.id !== '0' && isOpen) {
      fetchRouteToZone(fromZoneId, toZone.id, activeFilterValues(filters))
        .then(setRouteToZone)
        .catch(() => setRouteToZone([]))
    } else {
      setRouteToZone(undefined)
    }
  }, [fromZoneId, toZone, isOpen, setRouteToZone, filters])

  const [selectedMarker, setSelectedMarker] = useState('')
  const [routeToMarker, setRouteToMarker] = useState<Zone[]>()

  useEffect(() => {
    if (isOpen && fromZoneId !== '0' && selectedMarker !== '') {
      fetchRouteToMarker(fromZoneId, selectedMarker, activeFilterValues(filters))
        .then(setRouteToMarker)
        .catch(() => setRouteToMarker([]))
    } else {
      setRouteToMarker(undefined)
    }
  }, [fromZoneId, selectedMarker, isOpen, setRouteToMarker, filters])

  const [showSettings, setShowSettings] = useState(false)

  const toggleFilter = useCallback((filterValue: string) => {
    setFilters((filters) => {
      const filter = filters.find(f => f.value === filterValue)!
      const filterIndex = filters.indexOf(filter)
      const before = filters.slice(0, filterIndex)
      const after = filters.slice(filterIndex + 1)
      return [
        ...before,
        {...filter, selected: !filter.selected},
        ...after
      ]
    })
  }, [setFilters])

  return <div className={styles.accordion}>
    <Accordion>
      <AccordionSummary className={styles.main} onClick={() => setIsOpen(old => !old)}>
        Routing
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.options}>
          <div className={styles.settings}>
            <Button className={styles.button} onClick={() => setShowSettings(true)}>Open settings</Button>
            <RoutingSettings
              open={showSettings}
              onClose={() => setShowSettings(false)}
              filterOptions={filters}
              toggleFilter={toggleFilter}
            />
          </div>
          <div className={styles.route}>
            <p>To closest city</p>
            {fromZoneId === '0' && <p>Please select a From zone</p>}
            {routeToCity?.length === 0 && <p>Could not find a valid route</p>}
            {routeToCity?.map(z =>
              <div className={styles.routeZone}>--> {z.name}</div>
            )}
          </div>
          <div className={styles.route}>
            <ZoneSearch
              zoneList={zones}
              label="Where to?"
              value={toZone}
              update={setToZone}
              variant="outlined"
            />
            <p>Your route</p>
            {fromZoneId === '0' && <p>Please select a From zone</p>}
            {toZone.id === '0' && <p>Please select where to</p>}
            {routeToZone?.length === 0 && <p>Could not find a valid route</p>}
            {routeToZone?.map(z =>
              <div className={styles.routeZone}>--> {z.name}</div>
            )}
          </div>
          <div className={styles.route}>
            <p>To map marker</p>
            <Select
              value={selectedMarker}
              onChange={e => setSelectedMarker(e.target.value as string)}
              placeholder="Select marker"
            >
              {minimapMarkerValues.map(item => <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>)}
            </Select>
            {fromZoneId === '0' && <p>Please select a From zone</p>}
            {routeToMarker?.length === 0 && <p>Could not find a valid route</p>}
            {routeToMarker?.map(z =>
              <div className={styles.routeZone}>--> {z.name}</div>
            )}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>

  </div>

}
