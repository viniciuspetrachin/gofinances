import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
   type: 'up' | 'down';
}

interface IButtonProps extends IconProps {
   isActive: boolean;
}

export const Container = styled.TouchableOpacity<IButtonProps>`
   width: 48%;
   flex-direction: row;
   align-items: center;
   border-style: solid;
   border: ${({ isActive }) => isActive ? 0 : 0.5}px;
   border-color:  ${({ theme }) => theme.colors.text};
   border-radius: 5px;
   padding: 16px;
   justify-content: center;

${({ isActive, type }) => isActive && type === 'down' &&
      css`background-color: ${({ theme }) => theme.colors.attention_light}`};
${({ isActive, type }) => isActive && type === 'up' &&
      css`background-color: ${({ theme }) => theme.colors.success_light}`};
`;
export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather) <IconProps>`
   font-size: ${RFValue(24)}px;
   margin-right: ${RFValue(12)}px;
   color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`
