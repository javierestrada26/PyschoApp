import {  ScrollView, View, useWindowDimensions } from "react-native"
import { Header } from "../../components/ui/Header"
import { Categories } from "../../components/ui/Categories"
import { NewLastestPublic } from "./Pubications/NewLastestPublic"
import { Personal } from "./Personal/Personal"



export const HomeScreen = () => {
  const {height,} = useWindowDimensions()

  return (
  <View
    style={{
      flex:1,
    }}
  >
    <Header/>
      <View >
      {/**Slider */}
      <ScrollView
        style={{marginBottom:height * 0.14, padding:10}}
        showsVerticalScrollIndicator={false}
      >
        {/**<Personal Slider/>*/}
          <Personal />

        {/**Categories */}
        <Categories/>
        {/**New Last Public */}
         <NewLastestPublic/>
      </ScrollView>
      </View>

  </View>
  )
}
