import axios from "axios";


export async  function sendEmail (contents) {
    return axios.post('/api/email',contents)

}