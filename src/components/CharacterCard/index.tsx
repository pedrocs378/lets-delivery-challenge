import { useMemo } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

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
}

export function CharacterCard({ character }: CharacterCardProps) {

	const { favorites, addOrDeleteFavoriteCharacter } = useFavorites()

	const isFavorited = useMemo(() => {
		return favorites.some(favoritedChar => favoritedChar.id === character.id)
	}, [favorites])

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