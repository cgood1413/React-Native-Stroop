import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { generateColors } from "./utils/generateColors";

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

export default function App() {
  const {prompt, style, buttons} = generateColors(colors);
  const [promptColor, setPrompt] = useState(prompt);
  const [styleColor, setStyleColor] = useState(style);
  const [buttonColors, setButtonColors] =  useState(buttons);

  const handlePress = ({target}) => {
    // I need to find a way to compare the target color with the style color :/
    console.log(target.viewConfig.validAttributes)
    const {prompt, style, buttons} = generateColors(colors);
      setPrompt(prompt);
      setStyleColor(style);
      setButtonColors(buttons);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, textTransform: 'uppercase', color: styleColor }}>{promptColor}</Text>
      {buttonColors.map((color, index) => {
        return <Pressable key={color} id={color} style={[styles.testButton, { backgroundColor: buttonColors[index] }]}
        onPress={handlePress}/>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  testButton: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
});
