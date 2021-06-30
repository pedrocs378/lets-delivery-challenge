import styled from "styled-components";

export const Container = styled.div`
	
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
			}
		}
	}

	main {
		padding: 0 1rem;
		max-width: 1120px;
		margin: 2.5rem auto;
	}
`

export const SearchInput = styled.label`
	display: flex;

	width: 100%;
	max-width: 30rem;
	height: 5rem;

	padding: 0.8rem 1rem 0.8rem 1.5rem;
	border-radius: 0.5rem;

	background: var(--white);
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

	&:hover svg {
		color: var(--blue);
		opacity: 1;
	}

	svg {
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
		border: 0;
		background: var(--blue);
		color: var(--white);
		width: 7.5rem;
		border-radius: 0.5rem;
		font-weight: 600;

		transition: ease 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`