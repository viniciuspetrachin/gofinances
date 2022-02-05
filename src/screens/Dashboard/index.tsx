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
				<HightlightCard />
				<HightlightCard />
				<HightlightCard />
			</HighlightCards>
		</Container>
	)
}

export default Dashboard
