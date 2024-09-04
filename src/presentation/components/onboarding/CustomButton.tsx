import {
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    useWindowDimensions,
  } from 'react-native';
  import Animated, {
    AnimatedRef,
    SharedValue,
    interpolateColor,
    useAnimatedStyle,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';
  import {useNavigation} from '@react-navigation/native';
  import { OnboardingData } from '../../../config/data/data';
  import {StackNavigationProp} from '@react-navigation/stack';    