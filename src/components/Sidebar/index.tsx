import { useState } from 'react'
import { FiHome, FiHeart } from 'react-icons/fi'

import { ActiveLink } from '../ActiveLink'
import { BurguerButton } from '../BurguerButton'

import { Container } from './styles'

export function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<Container isOpened={showSidebar}>
			<BurguerButton
				isActive={!showSidebar}
				onClick={() => setShowSidebar(state => !state)}
			/>

			<div>
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
			</div>
		</Container>
	)
}