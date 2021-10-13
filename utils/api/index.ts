import axios from 'axios';
import {CreateUserDto, LoginDto, ResponseUser} from './types';

const instance = axios.create({
  baseURL: 'http://localhost:7777'
});

export const UserApi = {
  async register(dto: CreateUserDto) {
    const {data} = await instance.post<CreateUserDto, {data: ResponseUser}>('http://localhost:7777/auth/register', dto);
    return data;
  },
  async login(dto: LoginDto) {
    const {data} = await instance.post<LoginDto, {data: ResponseUser}>('/auth/login', dto);
    return data;
  }
};