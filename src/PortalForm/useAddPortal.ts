import { useCallback } from 'react'

import { PortalPayload } from '../types'

import useGetPortals from '../common/hooks/useGetPortals'

const useAddPortal = () => {
  const checkPortals = useGetPortals()

  return useCallback(
    (portal: PortalPayload) => {
      const body = JSON.stringify(portal)

      fetch(`/api/portal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }).then(() => checkPortals(true))
    },
    [checkPortals]
  )
}

export default useAddPortal
