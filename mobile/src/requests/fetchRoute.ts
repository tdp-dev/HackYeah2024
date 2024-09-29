import { valhalla } from "../api.ts"
import polyline from '@mapbox/polyline';

export type BicycleType = {
  Road: "Road",
  Hybrid: "Hybrid",
  Cross: "Cross",
  Mountain: "Mountain"
}

export interface RouteFilter {
  bicycle_type: BicycleType,
  use_roads: boolean,
  use_hills: boolean,
  use_living_streets: boolean,
  avoid_bad_surfaces: boolean,
  shortest: boolean,
}

const fetchRoute = async ({start, target, filter}) => {
  try {
    const response = await valhalla.post("/route", {
      "locations": [start, target],
      "shape_format": "geojson",
      "exclude_locations": [
        { "lat": 50.067395, "lon": 19.982695 }
      ],
      "costing": "bicycle",
      // "costing_options": {
      //   "bicycle": filter
      // },
      "units": "kilometers",
      "id": "my_work_route"
    });

    const data = response.data;
    const shape = data.trip.legs[0].shape;
    let containsUnpavedRoads = false;
    data.trip.legs.forEach(l => {
      if (l.rough) {
        containsUnpavedRoads = true;
      }
    })
    const waypoints = polyline.decode(shape);
    const distance = data.trip.summary.length;
    return { waypoints, containsUnpavedRoads, distance };
  } catch (error) {
    console.error("Error fetching route:", error);
  }
};

export default fetchRoute;

