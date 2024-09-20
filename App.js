import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet ,DevSettings} from "react-native";

export default function App() {
  // State for background color
  const [bgColor, setBgColor] = useState("#b6f0ed");

  // State for random number
  const [randomNumber, setRandomNumber] = useState(0);

  // Function to generate a random number
  function genarateRandom() {
    const theValue = Math.floor(Math.random() * 100) + 1;
    if (theValue > 40) {
      setRandomNumber(theValue);
    } else {
      setRandomNumber(theValue+30);
    }
  }

  // State and function for second random value
  const [helpValue, setHelpValue] = useState(0);

  function secondRandom() {
    const second = Math.floor(Math.random() * 30) + 1;
    setHelpValue(second);
  }

  // Function to increment helpValue based on button presses
  const [count, setcount] = useState(0);
  function clickHandle() {
    setcount(count + 1);
    setHelpValue((prev) => prev + 1);
  }

  const [count2, setcount2] = useState(0);
  function clickhandle2() {
    setcount2(count2 + 5);
    setHelpValue((prev) => prev + 5);
  }

  const [count3, setcount3] = useState(0);
  function clickhandle3() {
    setcount3(count3 + 10);
    setHelpValue((prev) => prev + 10);
  }

  const [count4, setcount4] = useState(0);
  function clickhandle4() {
    setcount4(count4 + 20);
    setHelpValue((prev) => prev + 20);
  }

  // Function to handle the "Done" button press
  function eqalation() {
    if (helpValue === randomNumber) {
      setBgColor("#f2cee6"); // Change the background color to red
    }else{
      setBgColor("#f08c51");
    }
  }

  const reloadApp = () => {
    DevSettings.reload(); // This reloads the app
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View>
        <View style={styles.textBox}>
          <Text style={styles.randomNum}>{randomNumber}</Text>
        </View>
        <TouchableOpacity style={styles.randomNumButton} onPress={genarateRandom}>
          <Text style={styles.randomNumText}>Generate Random Number</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.secondRandom} onPress={secondRandom}>
          <Text>{helpValue}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.first2button}>
        <TouchableOpacity onPress={clickHandle} style={styles.button}>
          <Text>count me in 1 time</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickhandle2} style={styles.button}>
          <Text>count me in 5 times</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.second2button}>
        <TouchableOpacity onPress={clickhandle3} style={styles.button}>
          <Text>count me in 10 times</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickhandle4} style={styles.button}>
          <Text>count me in 20 times</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={eqalation} style={styles.randomNumButton2}>
        <Text>Done</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reloadApp} style={styles.randomNumButton2}>
        <Text>Re Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    fontWeight: "bold",
  },
  randomNumButton: {
    backgroundColor: "yellow",
    borderColor: "Black",
    borderWidth: 10,
    padding: 20,
    bottom: 100,
  },
  randomNumText: {
    fontStyle: "italic",
    fontSize: 25,
  },
  textBox: {
    bottom: 140,
    borderWidth: 6,
    padding: 11,
    borderColor: "#d984e8",
    width: 100,
    left: 120,
  },
  randomNum: {
    textAlign: "center",
    backgroundColor: "#ada5f0",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  secondRandom: {
    backgroundColor: "grey",
    padding: 30,
    bottom: 70,
    borderColor:"green"
  },
  first2button: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  second2button: {
    flexDirection: "row",
    width: 310,
    justifyContent: "space-between",
  },
  randomNumButton2: {
    backgroundColor: "yellow",
    borderColor: "Black",
    borderWidth: 10,
    padding: 20,
    top: 40,
  },
});
