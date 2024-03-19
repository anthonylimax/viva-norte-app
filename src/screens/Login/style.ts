import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";

export const Header = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;

export const LabelCredential = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ButtonSubmit = styled.Pressable`
  border: 1px solid #fff;
  margin-top: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${GlobalVariables.color.blue};
  padding: 12px;
  border-radius: 15px;
`;
export const TextField = styled.TextInput`
  width: 100%;
  font-size: 14px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 12px;
`;
export const CredentialsField = styled.View`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;
