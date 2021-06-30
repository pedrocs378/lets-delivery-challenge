import { FiSearch } from 'react-icons/fi'

import { Container, SearchInput } from './styles'

export function Home() {

	return (
		<Container>
			<header>
				<div>
					<strong>Início</strong>
				</div>
			</header>
			<main>
				<form>
					<SearchInput htmlFor="search">
						<FiSearch />
						<input
							id="search"
							type="search"
							name="search"
							placeholder="Pesquise por algum personagem..."
						/>
						<button type="submit">Pesquisar</button>
					</SearchInput>
				</form>
			</main>
		</Container>
	)
}