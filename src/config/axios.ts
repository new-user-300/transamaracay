import { BACKEND_URL } from '@/utils/const';
import axios from 'axios';
export const clienteAxios = axios.create({ baseURL: BACKEND_URL });
