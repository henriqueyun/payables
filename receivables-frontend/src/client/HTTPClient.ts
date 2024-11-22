import axios, { AxiosInstance } from 'axios';

export class HTTPClient<T> {
  private axiosInstance: AxiosInstance;
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public getAll = async (): Promise<T[]> => {
    try {
      const response = await this.axiosInstance.get<T[]>(this.endpoint);
      return response.data;
    } catch (err) {
      throw err
    }
  }

  public get = async (id: string): Promise<T> => {
    try {
      const response = await this.axiosInstance.get<T>(`${this.endpoint}/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  public post = async (body: T): Promise<T> => {
    try {
      const response = await this.axiosInstance.post<T>(this.endpoint, body);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  public patch = async (id: string, body: T): Promise<T> => {
    try {
      const response = await this.axiosInstance.patch<T>(`${this.endpoint}/${id}`, body);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  public delete = async (id: string): Promise<T> => {
    try {
      const response = await this.axiosInstance.delete<T>(`${this.endpoint}/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

}
