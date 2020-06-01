import React from "react";
import { Text } from "react-native";
import { useFirebaseApp } from "reactfire";

const Cart = () => {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return <Text>Desde cart</Text>;
};

export default Cart;
