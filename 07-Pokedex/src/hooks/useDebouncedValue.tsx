import {useState, useEffect} from 'react';

const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedvalue, setDebouncedvalue] = useState(input);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedvalue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedvalue;
};

export default useDebouncedValue;
