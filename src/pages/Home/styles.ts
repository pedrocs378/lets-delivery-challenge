import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	
	header{
		background: var(--white);
		height: 5rem;

		display: flex;
		align-items: center;
		justify-content: center;

		div {
			width: 100%;
			max-width: 1120px;
			padding: 0 1rem;

			strong{
				font-size: 1.25rem;
				color: var(--heading);
			}
		}
	}

	main {
		padding: 0 1rem;
		max-width: 1120px;
		margin: 2.5rem auto;
	}
`

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	form {
		width: 100%;
		max-width: 30rem;
		height: 5rem;
	}

	> span {
		color: var(--gray);
		opacity: 0.7;
		font-weight: 400;
		font-size: 1rem;
	}
`

export const SearchInput = styled.label`
	display: flex;

	height: 100%;
	width: 100%;

	padding: 0.8rem 1rem 0.8rem 1.5rem;
	border-radius: 0.5rem;

	background: var(--white);
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

	&:hover svg {
		color: var(--blue);
		opacity: 1;
	}

	> svg {
		margin: auto 0;
		margin-right: 0.5rem;
		color: var(--gray);
		opacity: 0.5;
		height: 1.25rem;
		width: 1.25rem;

		transition: ease 0.2s;
	}

	input {
		flex: 1;
		padding: 0 0.3rem;
		outline: none;
		border: 0;
		background: transparent;
		color: var(--black);
		font-weight: 600;

		&::placeholder {
			color: var(--gray);
			opacity: 0.5;
		}
	}

	button {
		width: 7.5rem;
		font-weight: 600;
		border: 0;
		border-radius: 0.5rem;

		background: var(--blue);
		color: var(--white);

		display: flex;
		align-items: center;
		justify-content: center;

		transition: ease 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`

export const SearchResults = styled.div`
	margin-top: 3rem;

	display: grid;
	grid-template-columns: repeat(4, calc((1120px / 4) - 1.5rem));
	gap: 1.5rem;
`