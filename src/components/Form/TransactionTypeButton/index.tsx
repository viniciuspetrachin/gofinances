import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, Title } from './styles'

interface TransactionTypeButtonProps extends TouchableOpacityProps {
	title: string
	type: 'up' | 'down'
	isActive: boolean
}

const icons = {
	up: 'arrow-up-circle',
	down: 'arrow-down-circle',
}

const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({
	title,
	type,
	isActive,
	...rest
}) => {
	return (
		<Container {...rest} isActive={isActive} type={type}>
			<Icon type={type} name={icons[type]} />
			<Title>{title}</Title>
		</Container>
	)
}

export default TransactionTypeButton
