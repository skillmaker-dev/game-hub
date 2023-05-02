import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '410683b689cb4db5bc5e23cd979bb3ae'
    }
})