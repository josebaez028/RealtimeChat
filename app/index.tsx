import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="">RootLayout</Text>
      <Link className="py-2 px-3 my-5 bg-blue-500 text-white"
      href={"/chat"}>
        Go to Chat

      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})