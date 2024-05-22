import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

type RootStackParamList = {
  PublicationsByCategoryScreen: { category: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'PublicationsByCategoryScreen'>;

export const CategoriesList = ({categories}: {categories: any}) => {
  
    const navigation = useNavigation<NavigationProp>()
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
                    <Text variant='bodyMedium' style={{textAlign:'center'}} >{item.name}</Text>
                </View>
                
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
    },
    iconContainer:{
      backgroundColor: '#F5F5F5',
      marginRight:10,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      width: 90,
  
    },
    categories:{
      width: 50,
      height: 50,
      objectFit: 'contain'
    }
  })
