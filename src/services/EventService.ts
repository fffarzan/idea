import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/Code-Pop",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export default class EventService {
  static getEvents(perPage: number, page: number) {
    return apiClient.get(`/Touring-Vue-Router/events?_limit=${perPage}&_page=${page}`)
  }
  static getEvent(id: number) {
    return apiClient.get(`/Touring-Vue-Router/events/${id}`)
  }
  static addEvent(event: any) {
    return apiClient.post('/Vue-3-Forms/events', event)
  }
}