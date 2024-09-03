import { useState } from "react";

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [AnsValue, setAnsValue] = useState(0);

  const handlePress = (value: string) => {
    if (value === "CE") {
      setDisplayValue("");
      return;
    }

    if (displayValue === "Error" || displayValue.includes("ANS")) {
      setDisplayValue(value);
      return;
    }

    if (value === "=") {
      try {
        const result = eval(displayValue).toFixed(2);
        if (
          result == Number.POSITIVE_INFINITY ||
          result == Number.NEGATIVE_INFINITY
        ) {
          throw RangeError;
        }
        setDisplayValue("ANS = " + result.toString());
        setAnsValue(result);
      } catch {
        setDisplayValue("Error");
      }
    } else {
      let v = value;
      if (value == "ANS") v = AnsValue.toString();
      setDisplayValue((prev) => prev + v);
    }
  };

  return { displayValue, handlePress };
};
