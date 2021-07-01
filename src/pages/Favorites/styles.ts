import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	flex: 1;

	main {
		padding: 0 1rem;
		max-width: 1120px;
		margin: 2.5rem auto;

		> p {
			text-align: center;
			margin-top: 1.5rem;

			a {
				text-decoration: none;
				color: var(--heading);
			}
		}

		@media (min-width: 500px) {
			> p {
				display: none;
			}
		}
	}
`

export const FavoriteList = styled.div`
	margin-top: 3rem;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media (min-width: 500px) {
		grid-template-columns: repeat(4, calc((1120px / 4) - 1.5rem));
	}
`