import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;

	main {
		padding: 0 1rem;
		max-width: 1120px;
		margin: 2.5rem auto;
	}
`

export const FavoriteList = styled.div`
	margin-top: 3rem;

	display: grid;
	grid-template-columns: repeat(4, calc((1120px / 4) - 1.5rem));
	gap: 1.5rem;
`