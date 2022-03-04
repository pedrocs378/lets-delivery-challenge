
import { Header } from "../../components/Header";
import { CharacterCard } from "../../components/CharacterCard";

import { useFavorites } from "../../hooks/useFavorites";

import { Container, FavoriteList, BackToTop } from './styles'

export function Favorites() {

	const { favorites } = useFavorites()

	return (
		<>
			<Header id="favorites-top" title="Favoritos" />

			<Container>
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
					<BackToTop>
						<a href="#favorites-top">Voltar ao topo</a>
					</BackToTop>
				)}
			</Container>
		</>
	)
}