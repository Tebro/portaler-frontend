import React, {useCallback, useEffect, useState} from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Avatar, Button,
  Dialog,
  DialogTitle,
  List,
  ListItem, ListItemAvatar, ListItemText,
} from "@material-ui/core";
import styles from './styles.module.scss'
import {Zone} from "../types";
import {fetchRouteToCity, fetchRouteToZone} from "../common/utils/fetchRouting";
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
        <ListItem button onClick={() => toggleFilter(option.value)}>
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
    text: "No city portals to black zones"
  }
]

const activeFilterValues = (filters: FilterOption[]): string[] =>
  filters.filter(f => f.selected).map(f => f.value)



export const Routing: React.FC<RoutingProps> = ({fromZoneId, zones}) => {
  const [routeToCity, setRouteToCity] = useState<Zone[]>()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState(FILTERS.map(f => ({...f, selected: false})))
  useEffect(() => {
    if (fromZoneId !== '0' && isOpen) {
      fetchRouteToCity(fromZoneId, activeFilterValues(filters)).then(setRouteToCity)
    }
  }, [fromZoneId, setRouteToCity, isOpen, filters])

  const [toZone, setToZone] = useState(DEFAULT_ZONE)
  const [routeToZone, setRouteToZone] = useState<Zone[]>()

  useEffect(() => {
    if (fromZoneId !== '0' && toZone.id !== '0' && isOpen) {
      fetchRouteToZone(fromZoneId, toZone.id, activeFilterValues(filters)).then(setRouteToZone)
    }
  }, [fromZoneId, toZone, isOpen, setRouteToZone, filters])

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
