import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import Input from '../Input'
import { Container } from './styles'

interface InputFormProps extends TextInputProps {
	control: Control
	name: string
}

const InputForm: React.FC<InputFormProps> = ({
	control,
	name,
	...rest
}) => {
	return (
		<Container>
			<Controller
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input value={value} onChangeText={onChange} {...rest} />
				)}
				name={name}
			/>
		</Container>
	)
}

export default InputForm
