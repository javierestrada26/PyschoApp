import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export const LoadingIndicator = () => {
    return(
        <View style={styles.container}>
            <LottieView
            source={require('../../../assets/animations/loading.json')}
            autoPlay
            loop
            style={styles.animation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    animation: {
        width: 150,
        height: 150,
    },
});
