import { useEffect, useState } from "react";

export const Random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const useMathRandom = () => {
  const InicialValue = Random(0, 5);
  const [valueRandom, setValueRandom] = useState(InicialValue);

  useEffect(() => {
    console.log(valueRandom)
    setValueRandom(Random(0, valueRandom)); // tenho que setar um funcao q faca isso
  }, [valueRandom]);

  return { valueRandom, setValueRandom };
};
