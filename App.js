import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from "react-native";
import params from './src/params';
import MinedField from "./src/components/MinedField"
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMine, invertFlag } from "./src/function"


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMine(board)
      Alert.alert("Perdeu", "Tente novamente na proxima!")
    }

    if(won) {
      Alert.alert("Parabens!", "Voce ganhou!")
    }

    this.setState({board, lost, won})
  }

onSelectField = (row, column) => {
  const board = cloneBoard(this.state.board)
  invertFlag(board, row, column)
  const won = wonGame(board)

  if (won) {
    Alert.alert("Parabens, voce ganhou !!!")
  }

  this.setState({board, won})
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MinedField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
})
