import { memo } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import lodash from 'lodash'

import { useFavorites } from '../../hooks/useFavorites'

import { Container } from './styles'

type Character = {
	id: number
	name: string
	gender: string
	image: string
}

type CharacterCardProps = {
	character: Character
	isFavorited: boolean
}

function CharacterCardComponent({ character, isFavorited }: CharacterCardProps) {

	const { addOrDeleteFavoriteCharacter } = useFavorites()

	return (
		<Container>
			<img src={character.image} alt={character.name} />
			<section>
				<div>
					<strong>{character.name}</strong>
					<p>{character.gender}</p>
				</div>

				<button
					type="button"
					title="Adicionar aos favoritos"
					onClick={() => addOrDeleteFavoriteCharacter(character, isFavorited)}
				>
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

export const CharacterCard = memo(CharacterCardComponent, (prevProps, nextProps) => {
	return lodash.isEqual(prevProps.character, nextProps.character) && prevProps.isFavorited === nextProps.isFavorited
})