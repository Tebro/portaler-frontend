import React, {useEffect, useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import styles from './styles.module.scss'
import {Zone} from "../types";
import {fetchRouteToCity} from "../common/utils/fetchRouting";

interface RoutingProps {
  fromZoneId: string
}

export const Routing: React.FC<RoutingProps> = ({fromZoneId}) => {
  const [route, setRoute] = useState<Zone[]>()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (fromZoneId !== '0' && isOpen) {
      fetchRouteToCity(fromZoneId).then(setRoute)
    }
  }, [fromZoneId, setRoute, isOpen])
  console.log(fromZoneId)

  return <div className={styles.accordion}>
    <Accordion>
      <AccordionSummary className={styles.main} onClick={() => setIsOpen(old => !old)}>
        Routing to city
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.route}>
          {fromZoneId !== '0' && (route?.map(z =>
            <div className={styles.routeZone}>--> {z.name}</div>
          ) || <p>Loading...</p>) || <p>Please select a From zone</p>}
        </div>
      </AccordionDetails>
    </Accordion>

  </div>

}
