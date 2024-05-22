import { Button, Layout, Text } from '@ui-kitten/components'
import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';
import { useRef, useState } from "react";
import { colors, globalStyles } from '../../../config/theme/theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';

interface Slide{
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Bienvenido a Psicología en Línea',
        desc: 'Tu lugar seguro',
        img: require('../../../assets/inlove.png')
    },
    {
        title: 'Encuentra tu paz interior',
        desc: 'Con nuestras terapias personalizadas',
        img: require('../../../assets/loveit.png')
    },
    {
        title: 'Medita y relájate',
        desc: 'Con nuestras sesiones de meditación',
        img: require('../../../assets/meditacion.png')
    }
]

interface Props extends StackScreenProps<RootStackParams,'SlidesScreen'>{}

export const SlidesScreen = ({navigation}:Props) => {
    const [currentSlideIndex, setcurrentSlideIndex] = useState(0)
    const flatListRef = useRef<FlatList>(null)

    const onStart = () => {
        const {navigate} = navigation
        navigate('LoginScreen')
    }

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const {contentOffset,layoutMeasurement} = event.nativeEvent
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
        setcurrentSlideIndex(currentIndex > 0 ? currentIndex : 0)
    }

    const scrollToSlide = (index: number) => {
        if( !flatListRef.current) return
         flatListRef.current.scrollToIndex({
            index:index,
            animated: true

         })

    }

  return (
    <Layout 
     style={{flex:1,
        backgroundColor: colors.background
     }}>
        <FlatList
            ref={flatListRef}
            data={items}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => <SlidesItem item={item}/> }
            horizontal
            pagingEnabled
            scrollEnabled = {false}
            onScroll={onScroll}
        />
        {
            currentSlideIndex === items.length - 1 ?(
                <Button
                    style={{
                        position: 'absolute',
                        bottom: 120,
                        right: 30,
                        width: 120
                        
                    }}
                    onPress={onStart}
                        
                >Empezar</Button>
            ):(
                <Button

                style={{
                    position: 'absolute',
                    bottom: 120,
                    right: 30,
                    width: 120
                }}
                 onPress={()=>scrollToSlide(currentSlideIndex + 1)}
            >Siguiente</Button>
            )
        }

    </Layout>
  )
}

interface SlidesItemProps{
    item:Slide
}


const SlidesItem = ({item}: SlidesItemProps) => {
    const {width} = useWindowDimensions()
    const {title,desc,img} = item

    return(
        <Layout
        style ={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center',
            width: width
        }}>
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center'
            }}
            />
            <Text style={[
                globalStyles.title,
                {color: colors.primary} 
            ]}>{title}</Text>

            <Text style={{
                color: colors.text,
                marginTop: 20,

            }}>{desc}</Text>

        </Layout>
    )
}