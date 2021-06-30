import styled from "styled-components";

export const Container = styled.div`
	height: 22.5rem;
	/* width: 17.5rem; */
	width: 100%;
	border-radius: 0.5rem;
	
	background: var(--white);
	overflow: hidden;

	img {
		width: 100%;
		max-height: 75%;
		object-fit: cover;
	}

	section {
		padding: 0 1.5rem;
		height: 25%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-weight: 500;
			font-size: 1.25rem;
			color: var(--heading);
		}

		p {
			font-size: 0.85rem;
			color: var(--text);
			margin-top: 0.35rem;
			font-weight: 400;
		}

		button {
			font-size: 0;
			background: transparent;
			border: 0;
			transition: transform 0.2s;

			svg {
				height: 1.3rem;
				width: 1.3rem;
				color: var(--red);
			}

			&:hover {
				transform: translateY(-5%);
			}
		}
	}
`