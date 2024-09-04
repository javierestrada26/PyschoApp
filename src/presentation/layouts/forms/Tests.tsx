import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text} from "react-native"
import WebView from "react-native-webview"




export const Tests = () => {

    const [showWebView, setShowWebView] = useState(false);
    const navigation = useNavigation()

  const handleStartTest = () => {
      setShowWebView(true);
  };

  const handleCloseWebView = () => {
    setShowWebView(false);
  };

  return (
        <View style={{ flex: 1 }}>
            {!showWebView ? (
                <View style={styles.container}>
                  <View style={{padding:15, paddingTop:50, backgroundColor:'#005CAA', borderBottomLeftRadius:30, borderBottomRightRadius:30,height:120}}>
                  <Text style={{color:'white', marginTop:15, textAlign:'center', fontWeight:'bold', fontSize:32}} >Test</Text>
                </View>
                    <TouchableOpacity style={styles.card} onPress={handleStartTest}>
                        <Text style={styles.cardTitle}>Test de Ansiedad</Text>
                        <Button title="Comenzar Test" onPress={handleStartTest} />
                    </TouchableOpacity>
                    
                </View>
            ) : (
                <View style={{ flex: 1, marginTop:50, backgroundColor:'#FFFFFF' }}>
                    <WebView
                        source={{ uri: 'https://l77yaydznzo.typeform.com/to/Fgp9CvHx' }}
                        style={styles.webview}
                    />
                    <View style={styles.closeButtonContainer}>
                        <Button title="Cerrar" onPress={handleCloseWebView} />
                    </View>
                </View>
            )}
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
card: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 40,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
},
cardTitle: {
    fontSize: 18,
    marginBottom: 10,
},
webview: {
    flex: 1,
},
closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
},
})
