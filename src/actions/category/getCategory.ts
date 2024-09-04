import { useState } from "react";
import hyGraphApi from "../../config/api/hyGraphApi";
import { TypeCategory } from '../../infraestructure/interfaces/categories.type';

interface CategoriesResponse{
    categories: TypeCategory[]
}

export const getCategory = ()=>{
    const [categories, setCategories] = useState<TypeCategory[]>([])
    hyGraphApi.getCategories().then((resp)=>{
      const categoriesResponse = resp as CategoriesResponse; // Tipo de retorno explícito para resp
      console.log("CATEGORIAS", categoriesResponse.categories);
      setCategories(categoriesResponse?.categories );
    })
  }
