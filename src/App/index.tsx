import React from 'react'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import useGetPortalTimer from './hooks/useGetPortalTimer'
import useGetZones from './hooks/useGetZones'
import MainLayout from './MainLayout'
import Notifications from './Notifications'
import SideBar from './SideBar'
import styles from './styles.module.scss'
import theme from './theme'
import PortalMap from "../PortalMap";

const App = () => {
  useGetZones()
  useGetPortalTimer()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.appContainer}>
        <Notifications />
        <MainLayout>
          <SideBar />
          <PortalMap />
        </MainLayout>
      </div>
    </ThemeProvider>
  )
}

export default App
