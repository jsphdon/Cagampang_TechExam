import axios from "axios";
import http from "../http-common";
class EndpointsService {
  crudURL = `http://localhost:8000`

  getAll() {
    // return http.get("/users");
    let dataURL = `${this.crudURL}/users`;
    return axios.get(dataURL);
  }
  getUser(id) {
    return http.get(`/users/${id}`);
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  deleteAll() {
    return http.delete(`${this.crudURL}/users`);
  }
}
export default new EndpointsService();
