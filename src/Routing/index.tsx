import React, {useEffect, useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import styles from './styles.module.scss'
import {Zone} from "../types";
import {fetchRouteToCity, fetchRouteToZone} from "../common/utils/fetchRouting";
import ZoneSearch from "../ZoneSearch";
import {DEFAULT_ZONE} from "../common/data/constants";

interface RoutingProps {
  fromZoneId: string
  zones: Zone[]
}

export const Routing: React.FC<RoutingProps> = ({fromZoneId, zones}) => {
  const [routeToCity, setRouteToCity] = useState<Zone[]>()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (fromZoneId !== '0' && isOpen) {
      fetchRouteToCity(fromZoneId).then(setRouteToCity)
    }
  }, [fromZoneId, setRouteToCity, isOpen])

  const [toZone, setToZone] = useState(DEFAULT_ZONE)
  const [routeToZone, setRouteToZone] = useState<Zone[]>()

  useEffect(() => {
    if (fromZoneId !== '0' && toZone.id !== '0' && isOpen) {
      fetchRouteToZone(fromZoneId, toZone.id).then(setRouteToZone)
    }
  }, [fromZoneId, toZone, isOpen, setRouteToZone])

  return <div className={styles.accordion}>
    <Accordion>
      <AccordionSummary className={styles.main} onClick={() => setIsOpen(old => !old)}>
        Routing
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.options}>
          <div className={styles.route}>
            <p>To closest city</p>
            {fromZoneId !== '0' && (routeToCity?.map(z =>
              <div className={styles.routeZone}>--> {z.name}</div>
            ) || <p>Loading...</p>) || <p>Please select a From zone</p>}
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
            {toZone.id !== '0' && (fromZoneId !== '0' && (routeToZone?.map(z =>
              <div className={styles.routeZone}>--> {z.name}</div>
            ) || <p>Loading...</p>) || <p>Please select a From zone</p>)}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>

  </div>

}
