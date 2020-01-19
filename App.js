import React from 'react'
import { StyleSheet, TextInput, Dimensions, Image, ImageBackground, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const { width: WIDTH } = Dimensions.get('window')
export default function App() {
  return (
    //Hello wor
    <ImageBackground source={require('./assets/ygbn.jpg')} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/reactjs.png')} style={styles.logo} />
        <Text style={styles.logoText}>{'React Native'.toUpperCase()} </Text>
      </View>

      <View style={styles.inputSection}>
        <AntDesign style={styles.inputIcon} name="user" size={25} color="rgba(255,255,255,0.7" />
        <TextInput
          style={styles.inputUsername}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7'}
          underLineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputSection}>
        <AntDesign style={styles.inputIcon} name="lock" size={25} color="rgba(255,255,255,0.7" />
        <TextInput
          style={styles.inputUsername}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,0.7'}
          underLineColorAndroid="transparent"
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 10,
    opacity: 0.6
  },
  inputUsername: {
    width: WIDTH - 55,
    height: 45,
    color: 'white',
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    left: 35
  },
  inputSection: {
    justifyContent: 'center',
    marginTop: 10
  }
})
