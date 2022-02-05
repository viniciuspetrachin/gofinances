import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import HightlightCard from '../../components/HightlightCard'
import TransactionCard from '../../components/TransactionCard'

import {
	Container,
	Header,
	Photo,
	Icon,
	Title,
	User,
	UserGreeting,
	UserInfo,
	UserName,
	UserWrapper,
	HighlightCards,
	Transactions,
	TransactionList,
} from './styles'

const Dashboard: React.FC = () => {
	const data = [
		{
			title: 'Desenvolvimento de sites',
			amount: 'R$ 17.959,11',
			category: { icon: 'home', name: 'Vendas' },
			date: '15/08/15',
		},
      {
			title: 'Desenvolvimento de App',
			amount: 'R$ 53.959,11',
			category: { icon: 'home', name: 'Vendas' },
			date: '15/08/15',
		},
      {
			title: 'Desenvolvimento de App2',
			amount: 'R$ 53.959,11',
			category: { icon: 'home', name: 'Vendas' },
			date: '15/08/15',
		},
      {
			title: 'Desenvolvimento de App3',
			amount: 'R$ 53.959,11',
			category: { icon: 'home', name: 'Vendas' },
			date: '15/08/15',
		},
      {
			title: 'Desenvolvimento de App4',
			amount: 'R$ 53.959,11',
			category: { icon: 'home', name: 'Vendas' },
			date: '15/08/15',
		},
	]

	return (
		<Container>
			<Header>
				<SafeAreaView>
					<UserWrapper>
						<UserInfo>
							<Photo
								source={{
									uri: 'https://avatars.githubusercontent.com/u/21321057?v=4',
								}}
							/>
							<User>
								<UserGreeting>Olá,</UserGreeting>
								<UserName>Vinícius</UserName>
							</User>
						</UserInfo>
						<Icon name='power' />
					</UserWrapper>
				</SafeAreaView>
			</Header>
			<HighlightCards>
				<HightlightCard
					type='up'
					title='Entradas'
					amount='R$ 17.831,43'
					lastTransaction='Última entrada dia 13 de junho'
				/>
				<HightlightCard
					type='down'
					title='Saídas'
					amount='R$ 15.831,43'
					lastTransaction='Última saída dia 25 de maio'
				/>
				<HightlightCard
					type='total'
					title='Total'
					amount='R$ 23.831,43'
					lastTransaction='01 a 16 de abril'
				/>
			</HighlightCards>
			<Transactions>
				<Title>Listagem</Title>
				<TransactionList
					data={data}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	)
}

export default Dashboard
