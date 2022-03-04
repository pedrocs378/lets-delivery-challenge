import styled from "styled-components";

export const Container = styled.footer`
	grid-area: footer;
	background: transparent;
	height: 100%;

	display: flex;
	align-items: center;

	div {
		display: none;

		width: 100%;
		max-width: 1120px;
		margin: 0 auto;
		padding: 0 1rem;

		align-items: center;
		justify-content: center;

		small {
			color: var(--heading);
			font-size: 0.7rem;

			a {
				color: var(--red);
				text-decoration: none;

				transition: 0.2s;

				&:hover {
					filter: brightness(0.8);
				}
			}
		}
	}

	@media (min-width: 500px) {
		background: var(--white);

		div {
			display: flex;
		}
	}
`