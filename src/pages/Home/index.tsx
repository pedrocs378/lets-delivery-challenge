import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Loading from 'react-loading'
import Pagination from 'react-paginate'

import { CharacterCard } from '../../components/CharacterCard'
import { Header } from '../../components/Header'
import { Load } from '../../components/Load'
import { NotFound } from '../../components/NotFound'

import { useFavorites } from '../../hooks/useFavorites'

import { api } from '../../services/api'

import {
	Container,
	SearchContainer,
	SearchInput,
	SearchResults,
} from './styles'

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
	const [searchedText, setSearchedText] = useState('')
	const [page, setPage] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [notFounded, setNotFounded] = useState(false)

	const { favorites } = useFavorites()

	async function handleSearchCharacters(event: FormEvent) {
		event.preventDefault()

		if (!searchText.trim()) {
			return
		}

		try {
			setNotFounded(false)
			setIsLoading(true)

			const response = await api.get<CharacterResponse>(`/character/?name=${searchText}`)

			setSearchedText(searchText)
			setCharacters(response.data)
		} catch {
			setCharacters(null)
			setSearchedText('')
			setNotFounded(true)
		} finally {
			setIsLoading(false)
			setPage(0)
		}
	}

	async function handleChangePage(selectedPage: number) {
		try {
			setPage(selectedPage)
			const response = await api.get<CharacterResponse>(`/character/?name=${searchedText}&page=${selectedPage + 1}`)

			setCharacters(response.data)
		} catch {
			setCharacters(null)
			setPage(0)
		}
	}

	return (
		<Container id="homepage">
			<Header title="Início" />

			<main>
				<SearchContainer>
					<form onSubmit={handleSearchCharacters}>
						<SearchInput
							htmlFor="search"
							isFilled={!!searchText.trim()}
						>
							<FiSearch />
							<input
								id="search"
								type="search"
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

				{!characters && notFounded ? (
					<NotFound />
				) : isLoading && (
					<Load />
				)}

				{characters && (
					<>
						<SearchResults>
							{characters.results.map(character => {
								return (
									<CharacterCard
										key={character.id}
										character={character}
										isFavorited={favorites.some(favoritedChar => favoritedChar.id === character.id)}
									/>
								)
							})}
						</SearchResults>

						<Pagination
							pageCount={characters.info.pages}
							pageRangeDisplayed={3}
							marginPagesDisplayed={1}
							nextLabel="Próximo"
							previousLabel="Anterior"
							containerClassName="pagination-container"
							forcePage={page}
							onPageChange={({ selected }) => handleChangePage(selected)}
						/>

						<p>
							<a href="#homepage">Voltar ao topo</a>
						</p>
					</>
				)}
			</main>
		</Container>
	)
}