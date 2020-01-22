import { useState } from "react";

const useData = (key, initialValue) => {
  const [data, setData] = useState(initialValue);
  const saveData = newData => {
    setData(newData);
    window.localStorage.setItem(key, JSON.stringify(newData));
  };
  return [data, setData, saveData];
};

export default useData;