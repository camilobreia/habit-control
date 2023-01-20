import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts ({
    Inter_400Regular, 
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if(!fontsLoaded) { //se a fonte não carregar abrir o componente Loading
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({ //como o reactnative é estilizado
  container: {
    flex: 1, // flex 1 => o app ocupa todo o espaço disponível na tela (mesma função do CSS Web => display: "flex")
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter_600SemiBold'
  }
});
