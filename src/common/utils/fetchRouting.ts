import {Zone} from "../../types";


const filtersQuery = (filters: string[]): string =>
  `filters=${filters.join(',')}`

export const fetchRouteToCity = (fromId: string, filters: string[]): Promise<Zone[]> =>
  fetch(`/api/route/${fromId}/to/city${filters.length > 0 ? `?${filtersQuery(filters)}` : ''}`).then(r => r.json())

export const fetchRouteToZone = (fromId: string, toId: string, filters: string[]): Promise<Zone[]> =>
  fetch(`/api/route/${fromId}/to/${toId}${filters.length > 0 ? `?${filtersQuery(filters)}` : ''}`).then(r => r.json())
