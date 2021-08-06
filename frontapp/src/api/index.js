import axios from 'axios';

export const saveStudent = async (name,password,loginId) => {
    const url = 'http://localhost:8000/api/signup';
    return axios.post(url, {name, password,loginId}).then(res => res.data).catch(err => console.log(err))
}
