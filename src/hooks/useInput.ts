import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value);
  };
  return { value, onChange };
};

export default useInput;
