import styled from "styled-components";

export const Container = styled.div`
	height: 28rem;
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

	section {
		padding: 0 1.5rem;
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-weight: 500;
			font-size: 1.25rem;
			color: var(--heading);
		}

		p {
			font-size: 1rem;
			font-weight: 400;
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
	}

	@media (min-width: 500px) {
		height: 22.5rem;

		p {
			font-size: 0.85rem;
			line-height: 1.3rem;
		}	

		svg {
			height: 1.3rem;
			width: 1.3rem;
		}
	}
`