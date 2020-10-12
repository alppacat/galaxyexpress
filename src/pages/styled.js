import styled from 'styled-components';
import background from '../assets/universe.jpg'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    position: relative;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    font-family: raleway;
`;
export const BG = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    opacity: 0.2;
    position: absolute;
    z-index: 3;
`;
export const ParticlesContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 6;

    div#tsparticles{
        width: 100vw;
        height: 100vh;
    }
`
export const TextContainer = styled.div`
    display: inline-flex;
    position: absolute;
    z-index: 4;
    left: 35%;
    top: 42%;
    transform: translate(-50%, 0);
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    border-right: 1px solid #fff5d6;
    padding-right: 25px;

    h1{
        color: #fff5d6;
        text-align: right;
        margin: 5px;

        span {
            font-style: italic;
            color: #bba768;
        }
    }

    h2 {
        text-align: right;
        color: #fff5d6;
        font-size: small;
        margin: 5px;
    }

`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
