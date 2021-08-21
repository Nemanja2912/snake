import React, { useState } from "react";
import Input from "./Input";

const Calculator = () => {
  const [valueKg, setValueKg] = useState(0);
  const [valuePounds, setValuePounds] = useState(0);

  const handleKgInput = (e) => {
    setValuePounds(() => e.target.value * 2.20462262);
    setValueKg(() => e.target.value);
  };

  const handlePoundsInput = (e) => {
    setValueKg(() => e.target.value * 0.45359237);
    setValuePounds(() => e.target.value);
  };

  return (
    <>
      <Input handleChange={handleKgInput} label={"KG"} value={valueKg} /> <br />
      <Input
        handleChange={handlePoundsInput}
        label={"POUNDS"}
        value={valuePounds}
      />
    </>
  );
};

export default Calculator;
