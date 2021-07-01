import styled, { css } from "styled-components";

type ContainerProps = {
	isOpened: boolean
}

export const Container = styled.aside<ContainerProps>`
	grid-area: sidebar;
	width: 7rem;
	
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;

	button {
		position: absolute;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}
	
	> div {
		position: fixed;
		height: 100vh;
		width: 7rem;
		background: var(--black);

		display: flex;
		flex-direction: column;
		justify-content: center;

		transition: transform 0.4s;

		li {
			list-style: none;
		}

		${({ isOpened }) => isOpened && css`
			transform: translateX(-100%);
		`}
	}

	@media (min-width: 500px) {
		position: relative;

		> div {
			transform: translateX(0);	
		}
	}
`