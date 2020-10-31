import { useState } from 'react';

const useFormState = () => {
  const [input, setInput] = useState({});
  
  const handleInputChange = (e, value) => {
    if (!value)
      value = {
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      };

    setInput(value);
  }

  return [input, handleInputChange];
}

export default useFormState;
