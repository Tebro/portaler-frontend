import React from 'react'

import { portalerSmall } from '../../common/images'
import PortalForm from '../../PortalForm'
import styles from '../styles.module.scss'

const SideBar = () => {

  return (
    <aside className={styles.searchSide}>
      <header className={styles.mainHeader}>
        <img alt="logo" src={portalerSmall} className={styles.logo} />
      </header>
      <PortalForm />
    </aside>
  )
}

export default SideBar
