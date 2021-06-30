import { BsHeart, BsHeartFill } from 'react-icons/bs'

import { Container } from './styles'

type Character = {
	name: string
	gender: string
	image: string
}

type CharacterCardProps = {
	character: Character
	isFavorited: boolean
}

export function CharacterCard({ character, isFavorited }: CharacterCardProps) {

	return (
		<Container>
			<img src={character.image} alt={character.name} />
			<section>
				<div>
					<strong>{character.name}</strong>
					<p>{character.gender}</p>
				</div>

				<button type="button">
					{isFavorited ? (
						<BsHeartFill />
					) : (
						<BsHeart />
					)}
				</button>
			</section>
		</Container>
	)
}