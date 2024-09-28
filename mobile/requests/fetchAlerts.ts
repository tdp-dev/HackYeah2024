import { pb } from "../api.ts"

const fetchAlerts = async () => {
  const records = await pb.collection('alerts').getFullList({
      sort: '-created',
  });
  return records; 
}

export default fetchAlerts;
