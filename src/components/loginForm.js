import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput
        placeholder="Contraseña"
        type="password"
        secureTextEntry={true}
      />
      <Button
        title="Enviar"
        onPress={() => {
          console.log("Estamos usando el boton");
        }}
      />
    </View>
  );
}
