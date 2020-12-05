import React, { FC } from 'react'
import _ from 'lodash'

import { Paper } from '@material-ui/core'
import {Resource, Zone} from '../../types'

import styles from './styles.module.scss'

interface ZoneInfoProps {
  zone: Zone | null
}

const convertResourceList = (resources: Resource[]) =>
  _(resources)
    .groupBy('name')
    .map((v, k) => ({name: k, tier: _(v).map('tier').join(', ')}))

const ZoneInfo: FC<ZoneInfoProps> = ({ zone }) =>
  !zone ? null : (
    <div className={styles.infoContainer}>
      <Paper variant="outlined" className={styles.zoneInfo}>
        <strong>Type:</strong> {zone.type}
      </Paper>
      {zone.info?.resources && convertResourceList(zone.info?.resources).map(resource =>
        <Paper variant="outlined" className={styles.zoneInfo}>
          <strong>{resource.name}:</strong> {resource.tier}
        </Paper>
      )}
      {zone.info?.markers && <Paper variant="outlined" className={styles.zoneInfo}>
        <strong>Markers: </strong> {zone.info.markers.join(', ')}
      </Paper>}
    </div>
  )

export default ZoneInfo
