import React, { useState } from 'react'

import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import TransactionTypeButton from '../../components/Form/TransactionTypeButton'

import {
	Container,
	Header,
	Title,
	Form,
	Fields,
	TransactionsType,
} from './styles'

const Register: React.FC = () => {
	const [transactionType, setTransactionType] = useState('')

	const handleTransactionType = (type: 'up' | 'down') => {
		setTransactionType(type)
	}
	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<Form>
				<Fields>
					<Input placeholder='Nome' />
					<Input placeholder='Preço' />
					<TransactionsType>
						<TransactionTypeButton
							title='Income'
							type='up'
							onPress={() => handleTransactionType('up')}
							isActive={transactionType === 'up'}
						/>
						<TransactionTypeButton
							title='Outcome'
							type='down'
							onPress={() => handleTransactionType('down')}
							isActive={transactionType === 'down'}
						/>
					</TransactionsType>
				</Fields>
				<Button title='Enviar' />
			</Form>
		</Container>
	)
}

export default Register
