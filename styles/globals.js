import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Segoe UI', Tahoma,Geneva,Verdana,sans-serif;
    }
`
export default Globalstyle;