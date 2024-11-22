import axios, { AxiosInstance } from 'axios';
import { Credentials } from './types/Credentials';

export class AuthClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async signIn(credentials: Credentials): Promise<{ access_token: string }> {
    try {
      const response = await this.axiosInstance.post('/integration/auth/signin', credentials);
      return response.data
    } catch (err) {
      throw err
    }
  }

  signOut() {

  }
}
