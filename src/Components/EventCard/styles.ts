import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;

  margin-bottom: ${RFValue(10)}px;
  margin-horizontal: ${RFValue(10)}px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(10)}px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.attention};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
`;

export const DeleteTextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`;
