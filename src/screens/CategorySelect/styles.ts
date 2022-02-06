import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface CategoryProps {
   isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
   flex: 1;
`

export const ListCategories = styled(FlatList).attrs({
   showsVerticalScrollIndicator: false
})`
   width: 100%;
`

export const Category = styled.TouchableOpacity<CategoryProps>`
   width: 100%;
   flex: 1;
   padding: 10px;
   flex-direction: row;
   align-items: center;
   background-color: ${({theme, isActive}) => isActive ? theme.colors.secondary_light : theme.colors.shape};
`

export const Name = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)`
   font-size: ${RFValue(20)}px;
   margin-right: 16px;
`
export const Separator = styled.View`
   width: 100%;
   height: 0.5px;
   background-color: ${({ theme }) => theme.colors.text};
`
export const Footer = styled.View`
   width: 100%;
   padding: 24px;
`