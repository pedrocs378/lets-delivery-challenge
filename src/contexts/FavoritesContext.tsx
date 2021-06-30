import { useState, useCallback, createContext, ReactNode } from "react";

type Character = {
	id: number
	name: string
	gender: string
	image: string
}

type FavoritesContextData = {
	favorites: Character[]
	addOrDeleteFavoriteCharacter: (character: Character, isFavorited: boolean) => void
}

type FavoritesProviderProps = {
	children: ReactNode
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
	const [favorites, setFavorites] = useState<Character[]>(() => {
		const storagedFavorites = localStorage.getItem('@RickAndMortyChallenge:favorites')

		if (storagedFavorites) {
			return JSON.parse(storagedFavorites)
		}

		return []
	})

	const addOrDeleteFavoriteCharacter = useCallback((character: Character, isFavorited: boolean) => {
		if (isFavorited) {
			const newState = favorites.filter(favoriteChar => favoriteChar.id !== character.id)

			setFavorites(newState)
			localStorage.setItem('@RickAndMortyChallenge:favorites', JSON.stringify(newState))
		} else {
			const newState = [...favorites, character]

			setFavorites(newState)
			localStorage.setItem('@RickAndMortyChallenge:favorites', JSON.stringify(newState))
		}
	}, [favorites])

	return (
		<FavoritesContext.Provider value={{ favorites, addOrDeleteFavoriteCharacter }}>
			{children}
		</FavoritesContext.Provider>
	)
}