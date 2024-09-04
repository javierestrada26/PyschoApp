import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { ReactNode } from 'react';

export const AnimatedMessage =({children}: { children: ReactNode })=>{
    return (
        <Animatable.View 
            animation="fadeInUp" // Puedes cambiar el tipo de animación aquí
            duration={500} // Duración de la animación
            style={styles.messageContainer}
        >
            {children}
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        marginBottom: 10,
    },
});