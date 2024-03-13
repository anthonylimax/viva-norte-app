import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${GlobalVariables.color.ForTitleAnnouncemnt};
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${GlobalVariables.color.blue};
`;

export const Tariff = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${GlobalVariables.color.ForTarifsText};
`;
