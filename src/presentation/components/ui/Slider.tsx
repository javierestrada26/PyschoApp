import { Layout, Text} from "@ui-kitten/components"
import HyGraphApi from "../../../config/api/hyGraphApi";
import { useEffect, useState } from 'react';
import { Slider as SliderType } from "../../../infraestructure/interfaces/slide.type";
import { FlatList, Image, StyleSheet } from "react-native";
import { HomeHeading } from "../home/HomeHeading";
import { colors } from "../../../config/theme/theme";
import { MyIcon } from "./MyIcon";



interface SliderResponse{
    sliders: SliderType[]

}
export const Slider = () => {

    const [slider, setSlider] = useState<SliderType[]>([])
    useEffect(()=>{
        getSliders()
    
    },[])
    
    const getSliders = ()=>{
        HyGraphApi.getSlider().then((resp)=>{
            const sliderResponse = resp as SliderResponse; // Tipo de retorno explícito para resp
            console.log("resp", sliderResponse.sliders);
            setSlider(sliderResponse?.sliders );
        })
    }
  return (
    <Layout>
        <HomeHeading
            text="Personal de Apoyo"
            isViewAll={true}
        />
        <FlatList
            data={slider}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <Layout style={styles.containerImage}>
                    <Image source={{uri:item?.image?.url}}
                        style={styles.sliderImage}
                    />

                    <Text 
                        category="h6"
                        //necesito que el texto se alinee a la derecha
                        style={{marginTop:10, alignSelf:'flex-start', left:10}}
                    >{item?.name}</Text>
                    <Text 
                        category="s1"
                        style={{alignSelf:'flex-start', left:10}}
                    >Psicólog Clinico</Text>
                    <MyIcon name="arrow-forward"/>
                </Layout>
            )}
            keyExtractor={(item)=>item.id}
        />
    </Layout>
  )
}



const styles = StyleSheet.create({
    heading:{
        marginBottom: 10
    },
    containerImage:{
        marginRight:15,
        backgroundColor:colors.background,
        width: 260,
        padding: 10,
        borderRadius: 15,
        alignItems: 'flex-end',
        
        

    },
    sliderImage:{
        width: 230,
        height: 130,
        borderRadius: 10,
        right: 5
        
    },
    //poner que la flecha esté a la derecha del texto
    icon:{
        position: 'absolute',
        right: 10,
        top: 10
    }
})
