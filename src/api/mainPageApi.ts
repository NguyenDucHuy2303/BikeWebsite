import api from "./axio";

export const getMainPages = () => api.get("/main-page");

export const createMainPage = (data: any) =>
  api.post("/main-page", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateMainPage = (id: string, data: any) =>
  api.put(`/main-page/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteMainPage = (id: string) => api.delete(`/main-page/${id}`);

export const getMainPageById = (id: string) => api.get(`/main-page/${id}`);
