import React from "react";

const Input = ({ value, handleChange, label }) => {
  return (
    <div className="input">
      <label style={{ marginRight: 30 }} htmlFor={label}>
        {label}
      </label>
      <input
        onChange={handleChange}
        type="number"
        name={label}
        id={label}
        value={value}
      />
    </div>
  );
};

export default Input;
