import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";

export const TextComponent = styled.Text`
  font-size: 12px;
  padding: 15px;
  border-radius: 50px;
  border: 1px solid ${GlobalVariables.color.light_black};
`;
export const Input = styled.TextInput`
  font-size: 12px;
  padding: 15px;
  border-radius: 50px;
  border: 1px solid ${GlobalVariables.color.light_black};
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 50%;
  align-self: center;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  border-radius: 40px;
  padding: 10px;
  background-color: red;
`;
