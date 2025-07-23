import { ASSISTAN_ID } from "@env";
import axios from "axios";


const assistantApi= axios.create({
    baseURL: ASSISTAN_ID,
    headers: {
        'Content-Type': 'application/json'
    }
})

export{
    assistantApi
}