import { valhalla } from "../api.ts"

const fetchPointVerboseName = async (point: WayPoint) => {
  const response = await valhalla.post("/locate", {
    "locations": [ point ],
    "verbose": true
  });

  return response.data[0].edges[0].edge_info.names[0];
}

export default fetchPointVerboseName;

