import styled from "styled-components";

export const Container = styled.header`
	background: transparent;
	height: 5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 100%;
		max-width: 1120px;
		padding: 0 1rem;
		display: none;

		strong{
			font-size: 1.25rem;
			color: var(--heading);
		}
	}

	@media (min-width: 500px) {
		background: var(--white);

		div {
			display: block;
		}
	}
`