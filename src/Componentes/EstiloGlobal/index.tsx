import { createGlobalStyle } from "styled-components";

// Definir tipos para as fontes
type FontFace = {
  fontFamily: string;
  src: string;
};

// Componente Estilo Global
const GlobalStyle = createGlobalStyle<{ fonts: FontFace[] }>`
  ${props =>
    props.fonts.map(
      font => `
      @font-face {
        font-family: '${font.fontFamily}';
        src: url('${font.src}') format('ttf');
      }
    `
    )}

  /* Importar fonte do Google Fonts (exemplo) */
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

  /* Estilos globais */
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Roboto Flex', sans-serif; /* Exemplo de uso da fonte importada */
  }
`;

// Array de definições de fontes
const fonts: FontFace[] = [
  {
    fontFamily: 'TTSupermolot-Regular',
    src: '/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Regular.ttf',
  },
  {
    fontFamily: 'TTSupermolot-Bold',
    src: '/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Bold.ttf',
  },
];

// Componente EstiloGlobal
const GlobalStyleComponent: React.FC = () => (
  <GlobalStyle fonts={fonts} />
);

export default GlobalStyleComponent;
