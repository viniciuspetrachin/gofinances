import React, { useState } from 'react'

import Button from '../../components/Form/Button'
import CategorySelectButton from '../../components/Form/CategorySelectButton'
import InputForm from '../../components/Form/InputForm'
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
import { useForm } from 'react-hook-form'

interface FormData {
	name: string
	amount: string
}

const Register: React.FC = () => {
	const { control, handleSubmit } = useForm()

	const [category, setCategory] = useState({
		key: 'category',
		name: 'Categoria',
		icon: '',
		color: '',
	})

	const [transactionType, setTransactionType] = useState('')
	const [showCategoryModal, setShowCategoryModal] = useState(false)

	const handleTransactionType = (type: 'up' | 'down') => {
		setTransactionType(type)
	}

	const handleRegister = (form: FormData) => {
		const data = {
			name: form.name,
			amount: form.amount,
			transactionType,
			category: category.key,
		}
		console.warn(data)
	}

	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<Form>
				<Fields>
					<InputForm
						name='name'
						control={control}
						placeholder='Nome'
					/>
					<InputForm
						name='amount'
						control={control}
						placeholder='Preço'
					/>
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
					<CategorySelectButton
						title={category.name}
						onPress={() => setShowCategoryModal(true)}
					/>
				</Fields>
				<Button
					onPress={handleSubmit(handleRegister)}
					title='Enviar'
				/>
			</Form>
			<Modal visible={showCategoryModal}>
				<CategorySelect
					category={category}
					setCategory={setCategory}
					closeCategorySelect={() => setShowCategoryModal(false)}
				/>
			</Modal>
		</Container>
	)
}

export default Register
