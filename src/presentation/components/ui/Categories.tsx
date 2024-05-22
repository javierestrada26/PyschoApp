import { Layout} from "@ui-kitten/components"
import { TypeCategory } from "../../../infraestructure/interfaces/categories.type"
import { useEffect, useState } from "react"
import hyGraphApi from "../../../config/api/hyGraphApi"
import { HomeHeading} from '../home/HomeHeading';
import { CategoriesList } from "./CategoriesList"
import { View } from "react-native";




interface CategoriesResponse{
    categories: TypeCategory[]

}



export const Categories = () => {

  const [categories, setCategories] = useState<TypeCategory[]>([])


  useEffect(()=>{
    getCategories()
  },[])

  

  const getCategories = ()=>{
    hyGraphApi.getCategories().then((resp)=>{
      const categoriesResponse = resp as CategoriesResponse; // Tipo de retorno explícito para resp
      console.log("CATEGORIAS", categoriesResponse.categories);
      setCategories(categoriesResponse?.categories );
    })
  }
  return (
    <View style={{marginTop:20}}>
      <HomeHeading
        text="Categorias"
      />
      {/**Lista de categorias*/}
        <CategoriesList categories={categories}/>

    </View>
  )
}



