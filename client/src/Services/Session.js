import axios from 'axios';

export const CreateSession = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => res.data);
}