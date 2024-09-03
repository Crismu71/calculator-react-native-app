import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface Props {
  label: string;
  value?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (id: string) => void;
}

export default function CalculatorButton(props: Props) {
  const { value, label, style, onPress } = props;

  const handlePress = (_event: GestureResponderEvent) => {
    if (!onPress) return;
    onPress(value || label);
  };

  return (
    <TouchableOpacity style={[style, styles.button]} onPress={handlePress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    padding: 20,
    margin: 2,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
