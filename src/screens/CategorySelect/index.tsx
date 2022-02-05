import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Button from '../../components/Form/Button'
import TransactionTypeButton from '../../components/Form/TransactionTypeButton'
import { categories } from '../../utils/categories'

import { Header, Title } from '../Register/styles'

import {
	Category,
	Container,
	Footer,
	Icon,
	ListCategories,
	Name,
	Separator,
} from './styles'

interface CategoryProps {
	key: string
	name: string
	icon: string
	color: string
}
interface ItemProps {
	item: CategoryProps
}

interface SelectCategoryProps {
	category: string
	setCategory: (category: CategoryProps) => void
	closeCategorySelect: () => void
}

const CategorySelect: React.FC<SelectCategoryProps> = ({
	category,
	setCategory,
	closeCategorySelect,
}) => {
	return (
		<Container>
			<Header>
				<Title>Categorias</Title>
			</Header>
			<ListCategories
				data={categories}
				renderItem={({ item }: any) => (
					<Category>
						<Icon name={item.icon} />
						<Name>{item.name}</Name>
					</Category>
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>

			<Footer>
				<Button title='Selecionar' onPress={closeCategorySelect} />
			</Footer>
		</Container>
	)
}

export default CategorySelect
