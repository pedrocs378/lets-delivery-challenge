import { Link } from 'react-router-dom'
import { FiHome, FiHeart } from 'react-icons/fi'

import { Container } from './styles'

export function Sidebar() {

	return (
		<Container>
			<ul>
				<li>
					<Link to="/">
						<FiHome />
					</Link>
				</li>
				<li>
					<Link to="/favorites">
						<FiHeart />
					</Link>
				</li>
			</ul>
		</Container>
	)
}