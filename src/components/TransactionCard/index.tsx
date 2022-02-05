import React from 'react'
import { View } from 'react-native'

import {
	Category,
	Container,
	Footer,
	Icon,
	Title,
	CategoryName,
	Date,
	Amount,
} from './styles'

interface ICategoryProps {
	name: string
	icon: string
}

interface ITransactionCardProps {
	data: {
		title: string
		amount: string
		category: ICategoryProps
		date: string
	}
}

const TransactionCard: React.FC<ITransactionCardProps> = ({
	data,
}) => {
	const { title, amount, category, date } = data
	return (
		<Container>
			<Title>{title}</Title>
			<Amount>{amount}</Amount>
			<Footer>
				<Category>
					<Icon name='dollar-sign' />
					<CategoryName>{category.name}</CategoryName>
				</Category>
				<Date>{date}</Date>
			</Footer>
		</Container>
	)
}

export default TransactionCard
