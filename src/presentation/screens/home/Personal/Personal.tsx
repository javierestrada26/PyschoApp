import { Text, View } from "react-native"
import hyGraphApi from "../../../../config/api/hyGraphApi"
import { useEffect, useState } from "react"
import { HomeHeading } from "../../../components/home/HomeHeading"
import { PersonalList } from "./PersonalList"
import { useQuery } from "@tanstack/react-query"



export const Personal = () => {

    const [personal, setPersonal] = useState([])

  return (
    <View>
        <HomeHeading
        text="Personal de Apoyo"
        />
        <PersonalList personal={personal}/>
    </View>
  )
}
