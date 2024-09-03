import { StyleSheet, View } from "react-native";
import { useCalculator } from "../hooks/useCalculator";
import { BUTTONS_LAYOUT } from "../constants";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

export default function Calculator() {
  const { displayValue, handlePress } = useCalculator();
  return (
    <View style={styles.container}>
      <CalculatorDisplay value={displayValue} />
      {BUTTONS_LAYOUT.map((ele, idx) => (
        <View key={idx} style={styles.buttonRow}>
          {ele.map((btn) => (
            <CalculatorButton
              key={`${btn.label}-idx`}
              label={btn.label}
              value={btn.value}
              onPress={handlePress}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#969696",
    minWidth: 300,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
});
