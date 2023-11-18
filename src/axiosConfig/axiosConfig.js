import axios from 'axios'


const axiosConfig = axios.create({
    baseURL: 'https://nextjs-orpin-omega-98.vercel.app/api',
    // timeout: 1000,
});


export default axiosConfig;