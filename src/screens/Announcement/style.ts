import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";

export const ImageAnnouncement = styled.Image`
  height: 40%;
  min-height: 400px;
`;
export const Title = styled.Text`
  width: 100%;
  color: ${GlobalVariables.color.ForSubTitle};
  font-size: 20px;
  font-weight: 500;
`;
