import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        background-color: #21d190;
        background-image: linear-gradient(315deg, #21d190 0%, #d65bca 74%);

        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background: gray;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    a {
        text-decoration: none;
        color: #333;
    }   
`;

export default GlobalStyles;
