import React, { FC } from 'react'

import { Zone } from '../../types'

import HomeButton from './HomeButton'
import ReloadMap from './ReloadMap'
import styles from './styles.module.scss'
import ZoneInfo from './ZoneInfo'
import DeletePortal from "./DeletePortal";

interface ControlBarProps {
  handleHome: (zone: Zone) => void
  reloadMap: () => void
  zone: Zone | null,
  portalId?: string[],
  portalZoneNames?: string[]
}

const ControlBar: FC<ControlBarProps> = ({ handleHome, reloadMap, zone , portalId, portalZoneNames}) => (
  <div className={styles.bar}>
    <div>
      <ZoneInfo zone={zone} />
    </div>
    <div className={styles.controls}>
      {portalId && portalZoneNames && <DeletePortal portalId={portalId} zoneNames={portalZoneNames}/>}
      <HomeButton handleHome={handleHome} />
      <ReloadMap handleClick={reloadMap} />
    </div>
  </div>
)

export default ControlBar
