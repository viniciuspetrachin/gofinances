import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.shape};
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 5px;
`;
export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: ${RFValue(16)}px;
   padding: 18px 16px;
`

export const Icon = styled(Feather)`
   font-size: ${RFValue(20)}px;
   color: ${({ theme }) => theme.colors.text};
   margin-right: 16px;
`