import React, { useState } from 'react'

import Button from '../../components/Form/Button'
import CategorySelectButton from '../../components/Form/CategorySelectButton'
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

import CategorySelect from '../CategorySelect'

import { Modal } from 'react-native'

const Register: React.FC = () => {
   const [category, setCategory] = useState({
      key: 'category',
      name: 'Categoria'
   })
	const [transactionType, setTransactionType] = useState('')
	const [showCategoryModal, setShowCategoryModal] = useState(false)

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
					<CategorySelectButton title='Categoria' onPress={() => setShowCategoryModal(true)}/>
				</Fields>
				<Button title='Enviar' />
			</Form>
			<Modal visible={showCategoryModal}>
				<CategorySelect
					category='test'
					setCategory={setCategory}
					closeCategorySelect={() => setShowCategoryModal(false)}
				/>
			</Modal>
		</Container>
	)
}

export default Register
