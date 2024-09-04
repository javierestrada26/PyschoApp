import { ASSISTAN_API } from "@env";
import axios from "axios";


const assistantApi= axios.create({
    baseURL: ASSISTAN_API,
    headers: {
        'Content-Type': 'application/json'
    }
})

export{
    assistantApi
}