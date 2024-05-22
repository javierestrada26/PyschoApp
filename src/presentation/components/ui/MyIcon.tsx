import { useTheme} from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons';

interface Props{
    name: string;
    color?: string;
    white?: boolean;
    size?: number;
}

export const MyIcon = ({name,color,white=false,size=22}:Props) => {
    const theme = useTheme();
    if(white){
        color = theme['color-info-300'] 
    } else if(!color){
        color = theme['text-basic-color']
    }else{
        color= theme[color] ?? theme['text-basic-color']
    }
  return <Ionicons  name={name} color={color} size={size}/>
}
