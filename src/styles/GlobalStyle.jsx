import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

	body {
		margin: 0;
  		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

    a {
        vertical-align: baseline;
        text-decoration: none;
        color: inherit;
    }
    img {
        border: 0;
        max-width: 100%;
        vertical-align: middle;
    }
    input {
        vertical-align: middle;
        border: none;
    }
    button, input[type=button] {    
        background: none;
        border: none;
        cursor: pointer;
    }
    ol, ul {
        list-style: none;
    }
    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
    :root {
        --primary: #676f9d;

    }
`;

export default GlobalStyle;
