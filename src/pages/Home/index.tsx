import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Loading from 'react-loading'

import { api } from '../../services/api'

import { Container, SearchContainer, SearchInput } from './styles'

type Character = {
	id: number
	name: string
	gender: string
	image: string
}

type CharacterResponse = {
	info: {
		pages: number
		count: number
		next: string | null
		prev: string | null
	}
	results: Character[]
}

export function Home() {
	const [characters, setCharacters] = useState<CharacterResponse | null>(null)
	const [searchText, setSearchText] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	async function handleSearchCharacters(event: FormEvent) {
		event.preventDefault()

		if (!searchText.trim()) {
			return
		}

		try {
			setIsLoading(true)

			const response = await api.get<CharacterResponse>(`/character/?name=${searchText}`)

			setCharacters(response.data)
		} catch {
			setCharacters(null)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Container>
			<header>
				<div>
					<strong>Início</strong>
				</div>
			</header>
			<main>
				<SearchContainer>
					<form onSubmit={handleSearchCharacters}>
						<SearchInput htmlFor="search">
							<FiSearch />
							<input
								id="search"
								type="search"
								name="search"
								placeholder="Pesquise por algum personagem..."
								value={searchText}
								onChange={event => setSearchText(event.target.value)}
							/>
							<button type="submit">
								{isLoading ? (
									<Loading
										type="spinningBubbles"
										height={22}
										width={22}
									/>
								) : "Pesquisar"}
							</button>
						</SearchInput>
					</form>

					{characters && characters.info.count > 0 && (
						<span>Total {characters.info.count} personagens</span>
					)}
				</SearchContainer>
			</main>
		</Container>
	)
}