import axios from 'axios'
class WebServices 
{
    getAPICall(url)
    {
        const data = axios.get(url)
        return data;
    }
}
export default new WebServices();