import axios from "axios";
import PocketBase from 'pocketbase'

export const valhalla = axios.create({
  baseURL: 'http://srv20.mikr.us:40276/',
  timeout: 1000,
});
export const pb = new PocketBase("http://srv20.mikr.us:30164/")
