import { useState } from "react";
import hyGraphApi from "../../config/api/hyGraphApi";

export const getNewLastestPublic = async () => {
    const [lastestPublic, setLastestPublic] = useState([])
    hyGraphApi.getNewLastestPublic().then((resp: unknown) => {
        setLastestPublic(resp?.newLastestPublics);
    })
}