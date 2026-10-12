import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubcriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log(id);
  return (
    <View>
      <Text>Subcription Details:{id}</Text>
    </View>
  );
};

export default SubcriptionDetails;
