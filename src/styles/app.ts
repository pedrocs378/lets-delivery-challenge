import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	
	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 7rem 1fr;
		grid-template-areas: "sidebar content";
	}
`