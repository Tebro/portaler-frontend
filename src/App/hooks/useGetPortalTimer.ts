import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import useGetPortals from '../../common/hooks/useGetPortals'
import fetchPortals from '../../common/utils/fetchPortals'
import { ErrorActionTypes } from '../../reducers/errorReducer'
import { PortalMapActionTypes } from '../../reducers/portalMapReducer'

const useGetPortalTimer = () => {
  const initialLoad = useRef<boolean>(true)
  const checkPortals = useGetPortals()
  const checkPortalsRef = useRef<() => void>(checkPortals)
  const dispatch = useDispatch()

  useEffect(() => {
    if (initialLoad.current) {
      fetchPortals()
        .then((portals) => {
          dispatch({ type: PortalMapActionTypes.UPDATEMAP, portals })
          initialLoad.current = false
        })
        .catch((err) =>
          dispatch({ type: ErrorActionTypes.ADD, error: err.message })
        )
    }
  }, [dispatch])

  useEffect(() => {
    checkPortalsRef.current = checkPortals
  }, [checkPortals])

  useEffect(() => {
    const interval = setInterval(() => {
      checkPortalsRef.current()
    }, 30000)

    return () => {
      clearInterval(interval)
    }
  }, [])
}

export default useGetPortalTimer
