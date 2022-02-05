import React from 'react'
import { View } from 'react-native'

import { Container, Title, Icon } from './styles'

interface CategorySelectButtonProps {
	title: string
   onPress: () => void
}

const CategorySelectButton: React.FC<CategorySelectButtonProps> = ({ title, onPress }) => {
	return (
		<Container onPress={() => onPress()}>
			<Title>{title}</Title>
         <Icon name='chevron-down' />
		</Container>
	)
}

export default CategorySelectButton
