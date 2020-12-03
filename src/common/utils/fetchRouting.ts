import {Zone} from "../../types";


export const fetchRouteToCity = (fromId: string): Promise<Zone[]> =>
  fetch(`/api/route/${fromId}/to/city`).then(r => r.json())

export const fetchRouteToZone = (fromId: string, toId: string): Promise<Zone[]> =>
  fetch(`/api/route/${fromId}/to/${toId}`).then(r => r.json())
