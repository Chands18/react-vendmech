import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import styled from "styled-components";
import Machine from "./Machine";
import InputCoin from "./InputCoin";

const Cabinet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ToggleContext = createContext();

const App = () => {
  const [coin, setCoin] = useState(0);
  const [data, setData] = useState([]);
  const onCoinChanged = (total) => {
    setCoin(total);
  };
  const onOk = (price) => {
    setCoin(coin - price);
  };
  return (
    <ToggleContext.Provider value={{data, setData}}>
    <Cabinet>
      <Machine coin={coin} onOk={onOk} />
      <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
    </Cabinet>
    </ToggleContext.Provider>
  );
  
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
