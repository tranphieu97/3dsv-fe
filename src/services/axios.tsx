import axios from 'axios';
import { apiHost } from 'config';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = apiHost;

export default axios;
