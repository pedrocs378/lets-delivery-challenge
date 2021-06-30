import { FiHome, FiHeart } from 'react-icons/fi'

import { ActiveLink } from '../ActiveLink'

import { Container } from './styles'

export function Sidebar() {

	return (
		<Container>
			<ul>
				<li>
					<ActiveLink to="/">
						<FiHome />
					</ActiveLink>
				</li>
				<li>
					<ActiveLink to="/favorites">
						<FiHeart />
					</ActiveLink>
				</li>
			</ul>
		</Container>
	)
}