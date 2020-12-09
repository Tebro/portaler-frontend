import React, {useEffect, useState} from 'react'

const fetchHasUpdate = async (): Promise<boolean> => {
  try {
    const res = await fetch('/api/info').then(r => r.json())
    return res.hasUpdate
  } catch (e) {
    console.log("Unable to fetch updateInformation")
    return false
  }
}

export const UpdateNotification: React.FC = () => {
  const [show, setShow] = useState(false)

  useEffect( () => {
    fetchHasUpdate().then(setShow)
    setInterval(() => {
      fetchHasUpdate().then(setShow)
    }, 5 * 60 * 1000)
  }, [setShow])

  if (!show) {
    return null
  }

  return <div>
    <h4>Update available!</h4>
    <p>Ask you admin to update the app</p>
  </div>
}
