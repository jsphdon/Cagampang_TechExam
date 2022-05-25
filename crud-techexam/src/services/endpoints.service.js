import http from "../http-common";
class EndpointsService {
  getAll() {
    return http.get("/users");
  }
  get(id) {
    return http.get(`/view/${id}`);
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/edit/${id}`, data);
  }
  delete(id) {
    return http.delete(`/view/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/`);
//   }
}
export default new EndpointsService();
