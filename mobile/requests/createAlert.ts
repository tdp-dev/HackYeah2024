import { pb } from "../api.ts"

const createAlert = async (data) => {
  const record = await pb.collection('alerts').create(data);
  return record
}

export default createAlert;

