import styled from 'styled-components';
import background from '../assets/universe.jpg'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100vw;
    height: 100%;
`;

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    position: relative;
    z-index: 4;
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
    z-index: 5;

    div#tsparticles{
        width: 100vw;
        height: 100vh;
    }
`
export const TextContainer = styled.div`
    display: inline-flex;
    position: absolute;
    z-index: 6;
    left: 40%;
    top: 42%;
    transform: translate(-50%, 0);

   @media(max-width: 768px){
       flex-direction: column;
       left: 50%;
       top: 35%;
   }
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


    @media(max-width: 1040px){
        h1 {
            font-size:20px;
        }
        h2 {
            font-size: 14px;
        }
    }
    @media(max-width: 768px){
        border-right: unset;
        border-bottom: 1px solid #fff5d6;

       h1, h2 {
           text-align: left;
       }
       h2 {
           margin-bottom: 15px;
       } 
    }
    @media(max-width: 530px){
        h1{
            font-size: 16px;
            letter-spacing: -1px
        }
        h2{
            font-size: 13px;
            letter-spacing: -1px;
        }
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
        color: #fff5d6;
        margin: 2px 0 5px 25px;
        cursor: pointer;
    }
    @media(max-width: 1040px){
        a {
            font-size: 14px;
        }
    }

    @media(max-width: 768px){
        flex-direction: row;

        a {
            margin: 15px 0;
            font-size: 13px;
            letter-spacing: -1px;
        }
    }
`
export const Second = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Raleway;
    width: 100vw;
    box-sizing: border-box;
    background-color: #090c1a; 
    padding: 5% 10%;

    h1{
        color: #fff5d6;
    }
    @media(max-width: 768px){
       h1{
        font-size: 16px;
       } 
    }
`
export const SecondTextContainer = styled.div`
    color: #fff5d6;
    .container{
        display: flex;

        img{
            max-width: 300px;
        }
    }
    .containerLeft{
        width: 60%;
        p {
            text-align: justify;
            margin: 0;
        }
    }
    .containerRight{
        width: 40%;
        text-align: right;
    }
    @media(max-width: 1040px){
       .container {
           flex-direction: column;
       }
       .containerLeft, .containerRight{
           width: 100%;
       }
       .containerRight{
           text-align: center;
           margin-top: 20px;
       }
    }
    @media(max-width: 768px){
       .containerLeft p{
            font-size: 16px;
        }
    }
    @media(max-width: 530px){
        .containerLeft p {
            font-size: 14px
        }
    }
`
export const ThirdTextContainer = styled.div`
    color: #fff5d6;
    .container{
        display: flex;

        img{
            max-width: 300px;
        }
    }
    .containerLeft{
        width: 60%;
        p {
            text-align: justify;
            margin: 0;
        }
    }
    .containerRight{
        width: 40%;
        text-align: left;
    }
    @media(max-width: 1040px){
       .container {
           flex-direction: column;
       }
       .containerLeft, .containerRight{
           width: 100%;
       }
       .containerRight{
           text-align: center;
           margin-top: 20px;
       }
    }
    @media(max-width: 768px){
       .containerLeft p{
            font-size: 16px;
        }
    }
    @media(max-width: 530px){
        .containerLeft p {
            font-size: 14px
        }
    }

`