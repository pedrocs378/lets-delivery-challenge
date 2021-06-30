import { Header } from "../../components/Header";

import { Container, FavoriteList } from './styles'

export function Favorites() {

	return (
		<Container>
			<Header title="Favoritos" />

			<main>
				<FavoriteList>

				</FavoriteList>
			</main>
		</Container>
	)
}