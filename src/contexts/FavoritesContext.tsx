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
	const [favorites, setFavorites] = useState<Character[]>([])

	const addOrDeleteFavoriteCharacter = useCallback((character: Character, isFavorited: boolean) => {
		if (isFavorited) {
			const newState = favorites.filter(favoriteChar => favoriteChar.id !== character.id)

			setFavorites(newState)
		} else {
			setFavorites(state => [...state, character])
		}
	}, [favorites])

	return (
		<FavoritesContext.Provider value={{ favorites, addOrDeleteFavoriteCharacter }}>
			{children}
		</FavoritesContext.Provider>
	)
}