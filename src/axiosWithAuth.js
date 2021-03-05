import axios from 'axios';



export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://bw-backend-clouds.herokuapp.com/',
        headers: {
            'authorization': token
        },
    })
};

export default axiosWithAuth