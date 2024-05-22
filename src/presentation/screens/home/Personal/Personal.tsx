import { Text, View } from "react-native"
import hyGraphApi from "../../../../config/api/hyGraphApi"
import { useEffect, useState } from "react"
import { HomeHeading } from "../../../components/home/HomeHeading"
import { PersonalList } from "./PersonalList"



export const Personal = () => {

    useEffect(() => {
        getPersonal()
    },[])

    const [personal, setPersonal] = useState([])

    const getPersonal = async () => {
        hyGraphApi.getPersonal().then((resp: unknown) => {
            setPersonal(resp?.staffs)
            
        })
    }
  return (
    <View>
        <HomeHeading
        text="Personal de Apoyo"
        />
        <PersonalList personal={personal}/>
    </View>
  )
}
