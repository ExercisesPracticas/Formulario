import { useState } from "react";

const useForm = (inintialState = {}) => {
    const [values, setValues] = useState(inintialState);
        
      const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
      };
      return [values, handleInputChange];
}

export default useForm