import { View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface Props {
  value: string;
  style?: StyleProp<ViewStyle>;
}

export default function CalculatorDisplay(props: Props) {
  const { value, style } = props;

  return (
    <View style={[style, styles.display]}>
      <Text style={styles.text}>{value || 0}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  display: {
    backgroundColor: "#222",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
