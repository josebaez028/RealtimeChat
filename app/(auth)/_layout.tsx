import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Redirect, Stack } from "expo-router";


const AuthLayout = () => {


  return (
    <>
    <Stack>
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />


      </Stack>
      <StatusBar barStyle={"light-content"} />
    </>
      

  );
};

export default AuthLayout;