import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import params from './src/params';
import Field from "./src/components/Field"


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

        <Field />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged />
        <Field flagged opened/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  welcome: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
})
