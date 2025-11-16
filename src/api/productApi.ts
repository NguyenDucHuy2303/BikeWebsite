import api from "./axio";

// Lấy danh sách product
export const getProducts = () => api.get("/products");

// Tạo product mới
export const createProduct = (data: { name: string; price: number }) =>
  api.post("/products", data);

// Xóa product
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);

export const getProductById = (id: string) => api.get(`/products/${id}`);
