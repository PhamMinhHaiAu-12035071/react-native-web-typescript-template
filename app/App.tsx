import * as React from 'react'
import {
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
//
// const MaterialIconsWeb = require('./assets/fonts/MaterialIcons.ttf').default
// const IoniconsWeb = require('./assets/fonts/Ionicons.ttf').default
//
// const iconFontStyles = `
// @font-face {
//   src: url(${MaterialIconsWeb});
//   font-family: MaterialIcons;
// }
// @font-face {
//   src: url(${IoniconsWeb});
//   font-family: Ionicons;
// }
// `
//
// function addStyle(styleString: string) {
//   const style = document.createElement('style')
//   style.textContent = styleString
//   document.head.append(style)
// }
// addStyle(iconFontStyles)

const {height} = Dimensions.get('window')

const AnimatedView = Animated.createAnimatedComponent(View)

const App: React.FC<any> = (props: any) => {
  console.log(props)
  const opacity: Animated.Value = new Animated.Value(1)

  const animate = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        useNativeDriver: false,
        toValue: 0.4,
        duration: 250,
      }),
      Animated.timing(opacity, {
        useNativeDriver: false,
        toValue: 1,
        duration: 250,
      }),
    ]).start()
  }

  return (
    <View style={{height}}>
      <TouchableWithoutFeedback onPress={animate}>
        <AnimatedView
          style={{
            height,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity,
          }}>
          <Text>Hello, World!!</Text>
          <MaterialIcons name="collections" />
          <Ionicons name="ios-cart-outline" color="red" size={40} />
        </AnimatedView>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default App
