import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .margin {
    padding-left: 12px;
    padding-right: 12px;

    /* @media (min-width: 480px) {
      padding-left: 18px;
      padding-right: 18px;
    }
    @media (min-width: 769px) {
      padding-left: 24px;
      padding-right: 24px;
    } */
    @media (min-width: 1046px) {
      padding: 0;
      margin-left: auto;
      margin-right: auto;
      max-width: 1046px;
    }
    @media (min-width: 1280px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 1046px;
    }
  }

`
