import React from 'react'

import {
	Amount,
	Container,
	Content,
	Header,
	Icon,
	LastTransaction,
	Title,
} from './styles'

const HightlightCard: React.FC = () => {
	return (
		<Container>
			<Header>
				<Title>Entrada</Title>
				<Icon name='arrow-up-circle' />
			</Header>
			<Content>
				<Amount>R$ 17.599,99</Amount>
				<LastTransaction>
					Ultima entrada dia tal do mes tal
				</LastTransaction>
			</Content>
		</Container>
	)
}

export default HightlightCard
