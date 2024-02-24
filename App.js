import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
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

export default function App() {
  const [text, setText] = useState(``);

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <View>
          <Text style={styles.title}>Welcom ReactNative </Text>
          <TouchableOpacity
            onPress={() => {
              //  alert(`Button Taped`)
            }}
          >
            <Image
              margin={10}
              borderRadius={10}
              borderWidth={10}
              fadeDuration={1000}
              source={{
                width: 100,
                height: 100,
                uri: `https://picsum.photos/200`,
              }}
            />
          </TouchableOpacity>

          <Text>Type Your Name!</Text>

          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Type your Name here"
            onChangeText={(newText) => {
              setText(newText);
            }}
            defaultValue={text}
          />
          <Button
            onPress={() => {
              text.length > 0
                ? Alert.alert(`Welcome`, `Hello ${text}`)
                : Alert.alert(`ERROR`, `No Name Exist`);
            }}
            title="Click me"
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 20,
    // padding: 10,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.height,
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
