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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

const Registrar = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  const navigation = useNavigation();
  //Redirecionar

  const [correo, setcorreo] = useState("");
  const [password, setpassword] = useState("");
  const [nombre, setnombre] = useState("");
  const [telefono, settelefono] = useState("");

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

  const iniciarSesion = async () => {
    ///validando
    if (correo === "" && password === "" && telefono === "" && nombre === "") {
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
      try {
        const nuevoUsuario = await firebase
          .auth()
          .createUserWithEmailAndPassword(correo, password);
        console.log(nuevoUsuario);
        return await nuevoUsuario.user.updateProfile({
          displayName: nombre,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.titulo}>
          <Text style={{ fontWeight: "bold" }}>Registrate</Text>, ingresa tus
          datos
        </Text>
        <ScrollView>
          <List>
            <ListItem>
              <InputGroup>
                <Icon
                  name="person"
                  style={{ fontSize: 20, color: "#FA4F04" }}
                />
                <Input
                  onChangeText={(texto) => setnombre(texto)}
                  placeholder="Ingresa tu nombre"
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="call" style={{ fontSize: 20, color: "#FA4F04" }} />
                <Input
                  onChangeText={(texto) => settelefono(texto)}
                  placeholder="Ingresa tu telefono"
                />
              </InputGroup>
            </ListItem>

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
                Al crear una cuenta,
                <Text
                  onPress={() => navigation.navigate("TyC")}
                  style={styles.link}
                >
                  Acepto terminos y condiciones
                </Text>
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
                Registrarme{" "}
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

export default Registrar;
