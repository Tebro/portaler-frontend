import {Portal, PortalPayload} from '../../types'

const fetchPortals = async (): Promise<Portal[]> => {
  const payload: PortalPayload[] = await fetch(`/api/portal`).then(r => {
    if (r.status === 302) {
      window.location.reload()
      return
    }
    return r.json()
  })
  return payload.map(p => ({
    connection: p.connection,
    size: p.size,
    hours: p.hours,
    minutes: p.minutes,
    timeLeft: (p.minutes + p.hours * 60) * 1000,
    expiresUtc: ""
  }))
}

export default fetchPortals
