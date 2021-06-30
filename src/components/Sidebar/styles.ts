import styled from "styled-components";

export const Container = styled.aside`
	grid-area: sidebar;
	position: fixed;
	height: 100vh;
	width: 7rem;
	background: var(--black);

	display: flex;
	flex-direction: column;
	justify-content: center;

	li {
		list-style: none;
	}
`