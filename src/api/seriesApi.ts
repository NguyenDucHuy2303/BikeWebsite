import api from "./axio";

export const getSeries = () => api.get("/series");

export const createSeries = (data: { name: string; description: string }) =>
  api.post("/series", data);

export const updateSeries = (
  id: string,
  data: { name: string; description: string }
) => api.patch(`/series/${id}`, data);

export const deleteSeries = (id: string) => api.delete(`/series/${id}`);

export const getSeriesById = (id: string) => api.get(`/series/${id}`);
