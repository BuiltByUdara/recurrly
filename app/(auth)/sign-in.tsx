import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href={"/(tab)/index"} className="mt-5">
        GO
      </Link>
    </View>
  );
};

export default signIn;
