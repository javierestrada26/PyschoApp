import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../../actions/category/getCategory";

type RootStackParamList = {
  PublicationsByCategoryScreen: { category: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'PublicationsByCategoryScreen'>;

export const CategoriesList = ({categories}: {categories: any}) => {
  
    const navigation = useNavigation<NavigationProp>()

    const {isLoading,data=[]} = useQuery({
      queryKey: ['category'],
      queryFn: () => getCategory(),
      staleTime: 1000 * 60 * 60
  })
    return (
        <View>
        <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=> (
              <Pressable 
                style={[styles.container]}
                onPress={()=>{navigation.navigate('PublicationsByCategoryScreen',{category: item.name} as never) }}
                >
                <View style={styles.iconContainer}>
                    <Image
                        source={{uri:item?.icon?.url}}
                        style={styles.categories}
                    />
                </View>

                <Text variant='bodyMedium' style={{textAlign:'center', color:'black', fontWeight:'bold', right:8,marginTop:5}} >{item.name}</Text>
                
              </Pressable>
              
            )}
            
        />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      marginTop:5
    },
    iconContainer:{
      backgroundColor: '#005CAA',
      marginRight:35,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      width: 80,
      height: 70,
      marginLeft: 20,
      
      
    },
    categories:{
      width: 45,
      height: 45,


    }
  })
