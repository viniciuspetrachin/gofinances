import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.shape};
	width: ${RFValue(300)}px;
	border-radius: 5px;
	padding: 19px 23px ${RFValue(43)}px 23px; /* top | right | bottom | left */
   margin-right: ${RFValue(16)}px;
`
export const Header = styled.View`
	flex-direction: row;
   justify-content: space-between;
`

export const Title = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`
export const Icon = styled(Feather)`
	font-size: ${RFValue(40)}px;
`
export const Content = styled.View``
export const Amount = styled.Text`
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: ${RFValue(32)}px;
	color: ${({ theme }) => theme.colors.black};
	margin-top: ${RFValue(38)}px;
`
export const LastTransaction = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.text};
`
