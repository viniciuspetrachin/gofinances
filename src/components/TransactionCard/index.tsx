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

export interface IDataProps {
	type: 'positive' | 'negative'
	title: string
	amount: string
	category: ICategoryProps
	date: string
}

interface ITransactionCardProps {
	data: IDataProps
}

const TransactionCard: React.FC<ITransactionCardProps> = ({
	data,
}) => {
	const { title, amount, category, date, type } = data
	return (
		<Container>
			<Title>{title}</Title>
			<Amount type={type}>
            {type === 'negative' && '- '}
            {amount}
            </Amount>
			<Footer>
				<Category>
					<Icon name={category.icon} />
					<CategoryName>{category.name}</CategoryName>
				</Category>
				<Date>{date}</Date>
			</Footer>
		</Container>
	)
}

export default TransactionCard
