import { ButtonHTMLAttributes } from "react"

import { Container } from './styles'

type BurguerButton = ButtonHTMLAttributes<HTMLButtonElement> & {
	isActive?: boolean
}

export function BurgerButton({ isActive = false, ...rest }: BurguerButton) {

	return (
		<Container isActive={isActive} {...rest}>
			<div />
			<div />
			<div />
		</Container>
	)
}