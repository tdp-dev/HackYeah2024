import { valhalla } from "../api.ts"
import polyline from '@mapbox/polyline';

const fetchRoute = async ({start, target}) => {
  try {
    const response = await valhalla.post("/route", {
      "locations": [start, target],
      "shape_format": "geojson",
      "exclude_locations": [
        { "lat": 50.067395, "lon": 19.982695 }
      ],
      "costing": "auto",
      "costing_options": {
        "auto": { "country_crossing_penalty": 2000.0 }
      },
      "units": "miles",
      "id": "my_work_route"
    });

    const data = response.data;
    const shape = data.trip.legs[0].shape;
    const waypoints = polyline.decode(shape);
    return waypoints;
  } catch (error) {
    console.error("Error fetching route:", error);
  }
};

export default fetchRoute;

