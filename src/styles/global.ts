import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--white: #fff;
		--background: #F4F5F6;

		--black: #1B1B1F;
		--gray: #7A7A80;

		--red: #DC1637;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
	}

	body, input, button {
		font: 500 1rem 'Archivo', sans-serif;
	}

	button {
		cursor: pointer;
	}
`