import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  
} from "react-native";

import { useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {

  const orientation = useDeviceOrientation()

  const [text, setText] = useState(``);


//   return (
//     <>
//       <View style={{
//         flex:1,
//         flexDirection: orientation === `landscape` ? `row`:`column`
//       }}>
//         {/* <View>
//           {orientation && <Text style={styles.title}>Welcom ReactNative {orientation} </Text>}
//           <TouchableOpacity
//             onPress={() => {
//               //  alert(`Button Taped`)
//             }}
//           >
//             <Image
//               margin={10}
//               borderRadius={10}
//               borderWidth={10}
//               fadeDuration={1000}
//               source={{
//                 width: 100,
//                 height: 100,
//                 uri: `https://picsum.photos/300`,
//               }}
//             />
//           </TouchableOpacity>

//           <Text>Type Your Name!</Text>

//           <TextInput
//             keyboardType="email-address"
//             style={styles.input}
//             placeholder="Type your Name here"
//             onChangeText={(newText) => {
//               setText(newText);
//             }}
//             defaultValue={text}
//           />
//           <Button
//             onPress={() => {
//               text.length > 0
//                 ? Alert.alert(`Welcome`, `Hello ${text}`)
//                 : Alert.alert(`ERROR`, `No Name Exist`);
//             }}
//             title="Click me"
//           />
//         </View> */}


//         <View style={{
//           backgroundColor:`#fff`,
//           flexDirection:`row-reverse`,
//           justifyContent:"center",
//           alignItems:`flex-start`,
//           flex:1,
//         }}>

//           <View style={{
//             backgroundColor:`dodgerblue`,
//             width:100,
//             height:300
//           }} />
//           <View style={{
//             backgroundColor:`gold`,
//             width:100,
//             height:200
//           }} />
//           <View style={{
//             backgroundColor:`orange`,
//             width:100,
//             height:100
//           }} />
         

//         </View>

//         {/* <View style={{
//           backgroundColor:`#fff`,
//           flexDirection:`row`,
//           justifyContent:"center",
//           alignItems:`flex-end`,
//           flex:1,
//         }}>

//           <View style={{
//             backgroundColor:`gold`,
//             width:100,
//             height:200,
//             alignSelf:`flex-start`
//           }} />
//           <View style={{
//             backgroundColor:`dodgerblue`,
//             width:100,
//             height:200,
//             alignSelf:`center`,
//           }} />
//           <View style={{
//             backgroundColor:`orange`,
//             width:100,
//             height:200,
//             alignSelf:`flex-end`
// }} />
         

//         </View> */}

//         <View style={{
//           backgroundColor:`#fff`,
//           flexDirection:`row`,
//           justifyContent:"center",
//           alignItems:`flex-end`,
//           flex:1,
//         }}>

//           <View style={{
//             backgroundColor:`dodgerblue`,
//             width:100,
//             height:300
//           }} />
//           <View style={{
//             backgroundColor:`gold`,
//             width:100,
//             height:200
//           }} />
//           <View style={{
//             backgroundColor:`orange`,
//             width:100,
//             height:100
//           }} />
         

//         </View>
//       </View>
//     </>
//   );

  return(
    <>
    <View style={{
      backgroundColor:`#fff`,
      flex:1,
      flexDirection:`row`,
      justifyContent:`center`,
      alignItems:`center`

    }}>

      <View style={{
        width:100,
        height:100,
        backgroundColor:`dodgerblue`,
        top:20
      }} />

<View style={{
        width:100,
        height:100,
        backgroundColor:`gold`
      }} />

<View style={{
        width:100,
        height:100,
        backgroundColor:`tomato`,
        bottom:30
      }} />

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 20,
    // padding: 10,
    // height: `100%`,
    // width:`100%`,
    flex:1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20,
  },
  title: {
    // borderWidth: 2,
    // paddingTop:10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: `red`,
  },
  input: {
    width: `100%`,
    padding: 10,
    fontSize: 18,
    borderWidth: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderStartColor: `red`,
    borderEndColor: `green`,
    borderRadius: 10,
  },
});
