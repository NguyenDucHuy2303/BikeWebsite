import api from "./axio";

// Lấy danh sách New
export const getNews = () => api.get("/news");

// Tạo New mới
export const createNew = (data: any) =>
  api.post("/news", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateNew = (id: string, data: any) =>
  api.put(`/news/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
// Xóa New
export const deleteNew = (id: string) => api.delete(`/news/${id}`);

export const getNewById = (id: string) => api.get(`/news/${id}`);
