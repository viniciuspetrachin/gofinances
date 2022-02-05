import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import HightlightCard from '../../components/HightlightCard'

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
} from './styles'

const Dashboard: React.FC = () => {
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
		</Container>
	)
}

export default Dashboard
