import { useState } from 'react';

const useLocalStorage = (key: any, initialValue: any) => {
  // Retrieve initial value from localStorage if available
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Update localStorage and state value
  const setStoredValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Clear the localStorage and state value
  const clearStoredValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, clearStoredValue];
};

export default useLocalStorage;
