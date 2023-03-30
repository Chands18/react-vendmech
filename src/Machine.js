import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SlotItem from "./SlotItem";
import { products } from "./data";
import { useToggleContext } from "./context";
import { ToggleContext } from ".";

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
function Machine({ coin, onOk }) {
  const [productList, setProductList] = useState([]);

  const {data, setData} = useContext(ToggleContext);

  useEffect(() => {
    setData(products);
  }, []);

  const confirmBuy = (price, id) => {
    onOk(price);
    decrementStock(id);
  };

  const decrementStock = (id) => {
    const newData = [...data];
    var foundIndex = newData.findIndex((x) => x.id == id);
    newData[foundIndex].stock = newData[foundIndex].stock - 1;

    setData(newData);
  };



  return (
    <Container>
      {data &&
        data.map((p) => {
          return (
            <SlotItem
              key={p.id}
              product={p}
              coin={coin}
              onOk={(price, id) => confirmBuy(price, id)}
            />
          );
        })}
    </Container>
  );
}
export default Machine;
