
import { Header } from "../../components/Header";
import { CharacterCard } from "../../components/CharacterCard";

import { useFavorites } from "../../hooks/useFavorites";

import { Container, FavoriteList } from './styles'

export function Favorites() {

	const { favorites } = useFavorites()

	return (
		<Container id="favorites-page">
			<Header title="Favoritos" />

			<main>
				<FavoriteList>
					{favorites.map(character => {
						return (
							<CharacterCard
								key={character.id}
								character={character}
								isFavorited={favorites.some(favoritedChar => favoritedChar.id === character.id)}
							/>
						)
					})}
				</FavoriteList>

				{favorites.length > 1 && (
					<p>
						<a href="#favorites-page">Voltar ao topo</a>
					</p>
				)}
			</main>
		</Container>
	)
}