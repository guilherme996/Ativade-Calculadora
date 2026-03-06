import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RootLayout() {

  const [display, setDisplay] = useState("");

  function adicionar(valor: string) {
    setDisplay(display + valor);
  }

  function limpar() {
    setDisplay("");
  }

  function calcular() {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Erro");
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.display}>
        {display === "" ? "0" : display}
      </Text>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("7")}>
          <Text style={styles.texto}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("8")}>
          <Text style={styles.texto}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("9")}>
          <Text style={styles.texto}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => adicionar("/")}>
          <Text style={styles.texto}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("4")}>
          <Text style={styles.texto}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("5")}>
          <Text style={styles.texto}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("6")}>
          <Text style={styles.texto}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => adicionar("*")}>
          <Text style={styles.texto}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("1")}>
          <Text style={styles.texto}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("2")}>
          <Text style={styles.texto}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionar("3")}>
          <Text style={styles.texto}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => adicionar("-")}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("0")}>
          <Text style={styles.texto}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoClear]} onPress={limpar}>
          <Text style={styles.texto}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoResultado]} onPress={calcular}>
          <Text style={styles.texto}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => adicionar("+")}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"#fcfcfc",
    padding:20,
  },

  display: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: "right",
    borderRadius: 10,
    backgroundColor:"#000",
    color:"#fff",
    padding: 20,
  },

  linha: {
    flexDirection: "row",
    
  },

  botao: {
    flex: 1,
    margin: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    borderRadius: 10,
  },

  botaoClear: {
    backgroundColor: "red",

  },

  botaoOperadores: {
    backgroundColor: "rgb(112, 201, 239)",
  },

  botaoResultado: {
    backgroundColor: "#effc00cc",
  },

  texto: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },

});