import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native';

export default function App() {

  const [text,setText] = useState(``);
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native </Text>
      <Text>Type Your Name </Text>
      
      <TextInput keyboardType='email-address'
      style={styles.input}
      placeholder='Type your Name here'
      onChangeText={(newText)=>{setText(newText)}}
      defaultValue={text}

      />

      {text && text.length > 0 && <Text>Hello {text} </Text>}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    padding:10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    borderWidth:2,
    // paddingTop:10,
    paddingVertical:10,
    paddingHorizontal:5,
    color:`red`
  },
  input:{
    height:40,
    borderWidth:2,
    marginHorizontal:5,
    marginVertical:10,
    borderStartColor:`red`,
    borderEndColor:`green`,
    borderRadius:10,
  }
});
