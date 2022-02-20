import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: 14px;

  @media screen and (min-width: 486px) {
    font-size: 16px;
  }
}

:root {
  --primary: #f6ba18;
  --secondary: rgba(246, 186, 24, 0.29);
  --accent: #2f2e41;
  --body: #404040;
  --nav-height: 80px;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;

}

button {
  outline: 0;
  border: 0;
  background-color: transparent;
}

a {
  text-decoration: none;
  outline: none;
  border: none;
}

ul {
  text-decoration: none;
  list-style: none;
  padding: 0;
}

.container {
  max-width: 1080px;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
  gap: 3rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(1, 1fr);
}

.icon {
  font-size: 32px;
  cursor: pointer;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 1rem;
}

::-webkit-scrollbar-thumb {
    background-color: #f5e8b1;
    border-radius: 1rem;
}

@media screen and (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-2x {
    grid-template-columns: minmax(auto, 250px) 1fr;
  }
}
`;

export default GlobalStyles;
