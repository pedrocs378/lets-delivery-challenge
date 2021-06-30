
import { Container } from './styles'

type HeaderProps = {
	title: string
}

export function Header({ title }: HeaderProps) {

	return (
		<Container>
			<div>
				<strong>{title}</strong>
			</div>
		</Container>
	)
}