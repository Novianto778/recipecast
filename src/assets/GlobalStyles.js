import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: 12px;

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

a {
  text-decoration: none;
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
