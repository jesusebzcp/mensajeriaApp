import React from "react";
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const styles = {
  buttonText: {
    color: "black",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 300,
    height: 300,
  },
};

const SwiperView = () => {
  const navigation = useNavigation();
  return (
    <Swiper dotColor="#000" activeDotColor="#FA4F04" loop={false}>
      <View testID="View1" style={styles.slide1}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />

        <Text style={styles.text}>Empecemos </Text>

        <Text>Empieza enviando y recibiendo lo que necesitas </Text>
      </View>
      <View testID="View2" style={styles.slide2}>
        <Image
          style={styles.logo}
          source={require("../assets/images/swaper2.png")}
        />

        <Text style={styles.text}>Alcanze</Text>

        <Text>Llegamos a donde necesite norte y sur de Bogota</Text>
      </View>
      <View testID="View2" style={styles.slide3}>
        <Image
          style={styles.logo}
          source={require("../assets/images/swaper3.png")}
        />

        <Text style={styles.text}>Paga como quieras </Text>

        <Text>Efectivo o tarjeta de credito o debito </Text>
        <Text
          onPress={() => navigation.navigate("Inicio")}
          style={{ fontWeight: "bold", color: "#FA4F04", marginTop: 20 }}
        >
          Continuar{" "}
        </Text>
      </View>
    </Swiper>
  );
};

export default SwiperView;
