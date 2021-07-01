import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--white: #fff;
		--background: #F4F5F6;
		--heading: #47474D;
		--text: #AEAEB3;

		--black: #1B1B1F;
		--gray-light: #EBEBF0;
		--gray: #7A7A80;

		--red: #DC1637;
		--red-light: rgba(220, 22, 55, 0.1);
		
		--blue: #367BFF;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
		
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