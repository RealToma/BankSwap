import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
import SoleilRegular from './SoleilRegular.woff';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family : 'SoleilRegular';
    src: url('${SoleilRegular}');
  }
  * {
    font-family: 'SoleilRegular', sans-serif;
  }
  body {
    overflow : overlay;
    background-color: rgb(229,211,204);

    img {
      height: auto;
      max-width: 100%;
    }
  }

  @font-face {
    font-family: 'Good Times';
    src: url('/assets/fonts/Good-Times-Font/good\ times\ rg.ttf');
  }
  
  @font-face {
    font-family: 'Helvetica';
    src: url('/assets/fonts/Helvetica-Font/Helvetica.ttf');
  }
  #open-settings-dialog-button>svg{
    fill : white;
  }
`

export default GlobalStyle
