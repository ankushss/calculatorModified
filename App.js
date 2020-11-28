import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
