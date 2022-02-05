import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
   height: ${RFValue(113)}px;
   background-color: ${({ theme }) => theme.colors.primary};
   align-items: center;
   justify-content: flex-end;
   padding-bottom: ${RFValue(19)}px;
   width: 100%;
`

export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};
   font-size: ${RFValue(18)}px;
`
export const Form = styled.View`
   flex: 1;
   padding: 24px;
   width: 100%;
`
export const Fields = styled.View`
   flex: 1; 
`
export const TransactionsType = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: ${RFValue(8)}px;
`