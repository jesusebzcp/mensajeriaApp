import React, { useState } from "react";
import { Image, StyleSheet, Alert } from "react-native";
import {
  Input,
  Container,
  Content,
  Toast,
  Footer,
  FooterTab,
  Button,
  InputGroup,
  Icon,
  List,
  ListItem,
  Text,
  View,
  Item,
  Grid,
  Col,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
const Login = () => {
  const [correo, setcorreo] = useState("");
  const [password, setpassword] = useState("");

  //Mostrat o ocultar contraseña
  const [verPassword, setVerPassword] = useState(true);
  const [icon, setIcon] = useState("eye-off");

  const cambiarIcon = (e) => {
    if (icon === "eye-off") {
      setIcon("eye");
      setVerPassword(false);
    } else {
      setIcon("eye-off");
      setVerPassword(true);
    }
  };

  const iniciarSesion = () => {
    ///validando
    if (correo === "" && password === "") {
      Alert.alert(
        "UPS! Error",
        "Todos los campos son necesarios, Por favor llene todos los campos",
        [{ text: "OK" }]
      );
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
      Alert.alert("UPS! Error", "Por favor ingrese un email valido", [
        { text: "OK" },
      ]);
    } else if (password.length < 6) {
      Alert.alert("UPS! Error", "La contraseña debe ser mayor a 6 caracteres", [
        { text: "OK" },
      ]);
    } else {
      //Iniciar sesion en firebase
      console.log("iniciando ");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require("../assets/images/mensajero.jpg")}
      />

      <View style={styles.input}>
        <Text style={styles.titulo}>
          <Text style={{ fontWeight: "bold" }}>Bienvenido</Text>, ingresa tus
          datos
        </Text>
        <ScrollView>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="mail" style={{ fontSize: 20, color: "#FA4F04" }} />
                <Input
                  onChangeText={(texto) => setcorreo(texto)}
                  placeholder="Ingresa tu correo"
                />
              </InputGroup>
            </ListItem>
            <Item style={{ marginLeft: 15 }} floatingLabel>
              <Icon style={{ fontSize: 20, color: "#FA4F04" }} name="lock" />

              <Input
                onChangeText={(texto) => setpassword(texto)}
                placeholder="Ingresa tu nueva contraseña"
                secureTextEntry={verPassword}
              />
              <Icon
                style={{ fontSize: 30 }}
                name={icon}
                onPress={(e) => cambiarIcon(e)}
              />
            </Item>
            <View
              style={{
                justifyContent: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ marginLeft: 10 }}>
                ¿No tienes cuenta?{" "}
                <Text style={styles.link}>Registrate aqui!</Text>
              </Text>
            </View>
            <Button
              style={styles.boton}
              block
              rounded
              iconRight
              onPress={() => iniciarSesion()}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                Iniciar sesion {""}
                <Icon
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "white",
                    padding: 60,
                  }}
                  name="arrow-forward"
                />
              </Text>
            </Button>
          </List>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#FA4F04",
  },
  container: {
    flex: 1,
    backgroundColor: "white",

    alignItems: "center",
  },
  input: {
    paddingBottom: 10,
    width: "95%",
    height: "100%",
  },
  boton: {
    backgroundColor: "#FA4F04",
    marginVertical: 10,
  },
  header: {
    height: 150,
  },
  titulo: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default Login;
