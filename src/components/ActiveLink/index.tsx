import { LinkProps, useHistory } from 'react-router-dom'

import { Container } from './styles'

type ActiveLinkProps = LinkProps

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {

	const { location } = useHistory()

	return (
		<Container
			{...rest}
			isActive={location.pathname === rest.to}
		>
			{children}
		</Container>
	)
}