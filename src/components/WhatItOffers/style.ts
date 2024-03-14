import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";

export const Container = styled.View`
  display: grid;
  gap: 20px;
  width: 90%;
  align-self: center;
  grid-template-columns: 1fr 1fr;
`;
export const WhatItOffer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  font-size: 18px;
`;

export const ButtonShowAll = styled.Pressable`
  width: 90%;
  align-self: center;
  border-radius: 10px;
  border: 1px solid ${GlobalVariables.color.blue};
  height: 40px;
`;

export const TextForButton = styled.Text`
  color: ${GlobalVariables.color.blue};
  line-height: 38px;
  font-size: 20px;
  text-align: center;
`;
