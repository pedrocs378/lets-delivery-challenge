
import { Container } from './styles'

type HeaderProps = {
	id?: string
	title: string
}

export function Header({ id, title }: HeaderProps) {

	return (
		<Container id={id}>
			<div>
				<strong>{title}</strong>
			</div>
		</Container>
	)
}