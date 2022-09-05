import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export const TicTacToeScreen = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isTie, setIsTie] = useState(false);

  const handlePress = (row, col) => {
    if (board[row][col] !== null) {
      return;
    }
    const newBoard = board.map((row, i) => {
      if (i === row) {
        return row.map((col, j) => {
          if (j === col) {
            return currentPlayer;
          }
          return col;
        });
      }
      return row;
    });
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const winningCombinations = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[2][0], board[1][1], board[0][2]],
    ];
    winningCombinations.forEach((combination) => {
      if (
        combination[0] === combination[1] &&
        combination[1] === combination[2] &&
        combination[0] !== null
      ) {
        setWinner(combination[0]);
        setIsGameOver(true);
      }
    });
  };

  const checkDraw = () => {
    let isDraw = true;
    board.forEach((row) => {
      row.forEach((col) => {
        if (col === null) {
          isDraw = false;
        }
      });
    });
    if (isDraw) {
      setIsDraw(true);
      setIsGameOver(true);
    }
  };

  useEffect(() => {
    checkWinner();
    checkDraw();
  }, [board]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((row, i) => {
          return (
            <View key={i} style={styles.row}>
              {row.map((col, j) => {
                return (
                  <View key={j} style={styles.col}>
                    <Button title={col} onPress={() => handlePress(i, j)} />
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
      {isGameOver && (
        <View>
          {winner && <Text style={styles.winner}>{winner} wins!</Text>}
          {isDraw && <Text style={styles.winner}>It's a draw!</Text>}
          <Button
            title="Play again"
            onPress={() =>
              setBoard([
                [null, null, null],
                [null, null, null],
                [null, null, null],
              ])
            }
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    borderWidth: 1,
    borderColor: "black",
    width: 100,
    height: 100,
  },
  winner: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
