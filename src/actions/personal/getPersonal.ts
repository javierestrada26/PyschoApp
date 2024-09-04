import hyGraphApi from "../../config/api/hyGraphApi";
//importar personal.response
import { PersonalResponse } from "../../infraestructure/interfaces/personal.response";

//usar la interfaz personalresponse


export const getPersonal = async () => {
    return hyGraphApi.getPersonal().then((resp: unknown) => {
        return (resp as { staffs: any[] })?.staffs;
    });
};