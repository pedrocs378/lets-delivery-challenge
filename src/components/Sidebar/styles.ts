import styled from "styled-components";

export const Container = styled.aside`
	grid-area: sidebar;
	height: 100vh;
	background: var(--black);

	display: flex;
	flex-direction: column;
	justify-content: center;

	li {
		list-style: none;

		a {
			position: relative;
			display: flex;
			height: 5rem;
			color: var(--gray);

			align-items: center;
			justify-content: center;

			transition: ease 0.3s;

			svg {
				height: 1.5rem;
				width: 1.5rem;
			}

			&::before {
				content: '';
				height: 100%;
				width: 3px;
				background: var(--red);

				position: absolute;
				left: 0;

				opacity: 0;
				transition: ease 0.3s;
			}

			&:hover {
				background: rgba(0, 0, 0, 0.5);
				color: var(--white);

				&::before {
					opacity: 1;
				}
			}
		}
	}
`