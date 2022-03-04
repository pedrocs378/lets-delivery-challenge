import styled from "styled-components";

export const Container = styled.div`
	height: 30rem;
	width: 100%;
	border-radius: 0.5rem;
	
	background: var(--white);
	overflow: hidden;

	display: flex;
	flex-direction: column;

	img {
		width: 100%;
		max-height: 75%;
		object-fit: cover;
		flex: 8;
	}

	@media (min-width: var(--mobile)) {
		height: 22.5rem;
	}
`

export const CharacterInfo = styled.div`
	padding: 0 1.5rem;
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: space-between;

	strong {
		font-weight: var(--medium);
		font-size: 1.25rem;
		color: var(--heading);
	}

	p {
		font-size: 1rem;
		font-weight: var(--regular);
		line-height: 1.8rem;
		color: var(--text);
		margin-top: 0.35rem;
	}

	button {
		font-size: 0;
		background: transparent;
		border: 0;
		transition: transform 0.2s;

		svg {
			height: 1.8rem;
			width: 1.8rem;
			color: var(--red);
		}

		&:hover {
			transform: scale(115%, 115%);
		}
	}

	@media (min-width: var(--mobile)) {
		p {
			font-size: 0.85rem;
			line-height: 1.3rem;
		}	

		button svg {
			height: 1.3rem;
			width: 1.3rem;	
		}
	}
`
