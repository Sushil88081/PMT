import apiClient from "../customhooks/errorHandlingHook";

export interface CrudEntity<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
export class BaseService<T> implements CrudEntity<T> {
  private endpoint = apiClient.defaults.baseURL // declare explicitly

  constructor(endpoint: string) {
    this.endpoint = endpoint; // assign in constructor
  }

  async getAll(): Promise<T[]> {
    const res = await apiClient.get(`${this.endpoint}`);
    return res.data.data;
  }

  async getById(id: string): Promise<T | null> {
    const res = await apiClient.get(`${this.endpoint}/${id}`);
    return res.data.data;
  }

  async save(entity: T): Promise<T> {
    const res = await apiClient.post(`${this.endpoint}`, entity);
    return res.data.data;
  }

  async update(id: string, entity: T): Promise<T> {
    const res = await apiClient.put(`${this.endpoint}/${id}`, entity);
    return res.data.data;
  }

  async delete(id: string): Promise<void> {
     const result = await apiClient.delete(`${this.endpoint}/${id}`);
     return result.data.message;
  }
}
