import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "native-base";

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    width: 300,
    height: 300,
  },
});
const Inicio = () => {
  return (
    <View style={styles.contenedor}>
      <Image style={styles.img} source={require("../assets/images/logo.png")} />
      <View style={{ width: "90%" }}>
        <Button block style={{ backgroundColor: "#FA4F04" }}>
          <Text style={{ fontSize: 15, textTransform: "capitalize" }}>
            Soy nuevo por aqui
          </Text>
        </Button>

        <Button
          transparent
          block
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#FA4F04",
          }}
        >
          <Text
            style={{
              fontSize: 15,

              textTransform: "capitalize",
              color: "#FA4F04",
            }}
          >
            Ya he venido antes
          </Text>
        </Button>
      </View>
      <Text style={{ color: "gray", marginTop: 50 }}>Omitir</Text>
    </View>
  );
};

export default Inicio;
