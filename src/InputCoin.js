import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ToggleContext } from ".";
import { products } from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  height: 120px;
`;
const Item = styled.div`
  font-size: 1.5em;
  margin: 5px 15px 0 15px;
  padding: 5px;
  background-color: skyblue;
  color: DARKGREEN;
  width: 60px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Total = styled.div`
  font-size: 1.5em;
  margin: 25px 15px 0 15px;
  padding: 5px;
  text-align: center;
  background-color: LIMEGREEN;
  color: white;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;
const Cancel = styled.div`
  font-size: 1.3em;
  margin: 25px 15px 0 15px;
  padding: 5px;
  text-align: center;
  background-color: TOMATO;
  color: white;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;
const InputCoin = ({ coin, onCoinChanged }) => {
  const [total, setTotal] = useState(coin);
  const {data, setData} = useContext(ToggleContext);

  useEffect(() => {
    setTotal(coin);
  }, [coin]);

  const onItemClick = value => {
    const newTotal = total + value;
    setTotal(newTotal);
    onCoinChanged(newTotal);
  };
  const onCancel = () => {
    const newTotal = 0;
    setTotal(newTotal);
    onCoinChanged(newTotal);
    resetProduct();
  };

  const resetProduct = () => {
    setData(products)
  };

  return (
    <Container>
      <Item onClick={() => onItemClick(2000)}>2000</Item>
      <Item onClick={() => onItemClick(5000)}>5000</Item>
      <Item onClick={() => onItemClick(10000)}>10000</Item>
      <Item onClick={() => onItemClick(20000)}>20000</Item>
      <Item onClick={() => onItemClick(50000)}>50000</Item>
      <Total>{total}</Total>
      <Cancel onClick={onCancel}>Cancel</Cancel>
    </Container>
  );
}

export default InputCoin;
