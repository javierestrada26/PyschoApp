import { Layout, Text } from "@ui-kitten/components"
import { ScrollView, useWindowDimensions } from "react-native"
import { Header } from "../../components/ui/Header"
import { Slider } from "../../components/ui/Slider"
import { Categories } from "../../components/ui/Categories"
import { LastPublications } from "./LastPublications"
import { NewLastestPublic } from "./Pubications/NewLastestPublic"
import { Personal } from "./Personal/Personal"


export const HomeScreen = () => {
  const {height,} = useWindowDimensions()

  return (
  <Layout
    style={{
      flex:1,
    }}
  >
    <Header/>
      <Layout style={{padding:20}}>
      {/**Slider */}
      <ScrollView
      //darle espacio al final del scroll y que tome toda la pantalla
        style={{marginBottom:height * 0.2,}}
        showsVerticalScrollIndicator={false}
      >
        {/**<Slider/>*/}
          
          <Personal/>
        {/**Personal*/}
        {/**Categories */}
        <Categories/>
                                {/**LastPublications */}
                                {/**<LastPublications/> */}
        {/**New Last Public */}
         <NewLastestPublic/>
      </ScrollView>
      </Layout>

  </Layout>
  )
}
