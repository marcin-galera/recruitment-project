import axios from 'axios';


const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export default fetchData