import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const StyledInput = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  border-bottom-width: 2px;
  min-width: ${RFValue(15)}px;
  margin-bottom: ${RFValue(15)}px;
  padding-horizontal: ${RFValue(20)}px;
`;

export const StyledNameInput = styled(StyledInput)`
  max-width: ${RFValue(200)}px;
`;

export const Spacing = styled.View`
  margin: ${RFValue(10)}px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
`;

export const StyledTextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`;
