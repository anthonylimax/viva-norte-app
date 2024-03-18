import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;

export const LabelCredential = styled.Text`
  font-size: 16px;
`;

export const ButtonSubmit = styled.Pressable`
  border: 1px solid #606060;
  margin-top: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 20px;
  border-radius: 15px;
`;
export const TextField = styled.TextInput`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 12px;
`;
export const CredentialsField = styled.View`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;
