import { useState, useCallback, createContext, ReactNode } from "react";

type Character = {
	id: number
	name: string
	gender: string
	image: string
}

type FavoritesContextData = {
	favorites: Character[]
	addFavoriteCharacter: (character: Character) => void
	removeFavoriteCharacter: (characterId: number) => void
}

type FavoritesProviderProps = {
	children: ReactNode
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
	const [favorites, setFavorites] = useState<Character[]>([])

	const addFavoriteCharacter = useCallback((character: Character) => {
		setFavorites(state => [...state, character])
	}, [])

	const removeFavoriteCharacter = useCallback((characterId: number) => {
		const newState = favorites.filter(character => character.id !== characterId)

		setFavorites(newState)
	}, [favorites])

	return (
		<FavoritesContext.Provider value={{ favorites, addFavoriteCharacter, removeFavoriteCharacter }}>
			{children}
		</FavoritesContext.Provider>
	)
}