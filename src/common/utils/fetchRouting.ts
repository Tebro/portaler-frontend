import {Zone} from "../../types";


export const fetchRouteToCity = (fromId: string): Promise<Zone[]> =>
  fetch(`/api/route/${fromId}/to/city`).then(r => r.json())
