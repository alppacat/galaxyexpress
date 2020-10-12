import React from "react"
import Particles from "react-particles-js"
import holder from '../assets/holder.png'


import {
  MainContainer,
  Hero,
  Title,
  BG,
  ParticlesContainer,
  InfoContainer,
  TextContainer,
  Second,
  SecondTextContainer,
  ThirdTextContainer
} from './styled'

export default function Home() {
  return (
    <MainContainer>
      <Hero>
        <BG />
        <TextContainer>
          <Title>
            <h1>Grupo de búsqueda indirecta</h1>
            <h1>de <span>materia oscura</span></h1>
            <h2>UNAM-TEC</h2>
          </Title>
          <InfoContainer>
            <a>¿Lorem Ipsum?</a>
            <a>Lorem Ipsum</a>
            <a>Lorem Ipsum</a>
          </InfoContainer>
        </TextContainer>
        <ParticlesContainer>
          <Particles
            params={{
              particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#ede8b3" },
                shape: {
                  type: "circle",
                  stroke: { width: 0, color: "#000000" },
                  polygon: { nb_sides: 5 },
                  image: { src: "img/github.svg", width: 100, height: 100 },
                },
                opacity: {
                  value: 0.4,
                  random: true,
                  anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
                },
                size: {
                  value: 2,
                  random: true,
                  anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: { enable: false, rotateX: 600, rotateY: 600 },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: { enable: true, mode: "bubble" },
                  onclick: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  grab: { distance: 400, line_linked: { opacity: 1 } },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                  },
                  repulse: { distance: 400, duration: 0.4 },
                  push: { particles_nb: 4 },
                  remove: { particles_nb: 2 },
                },
              },
              retina_detect: true,
            }}
          >
          </Particles>
        </ParticlesContainer>
      </Hero>
      <Second>
        <h1>Lorem Ipsum</h1>
        <SecondTextContainer>
          <div className="container">
            <div className="containerLeft">
              <p>Cat ipsum dolor sit amet, sleep everywhere, but not in my bed push your water glass
              on the floor. Cry louder at reflection attack like a vicious monster steal mom's crouton
              while she is in the bathroom and look at dog hiiiiiisssss poop on the floor, break a
              tree steal the warm chair right after you get up.  birds and sleep in the bathroom
              sink meow all night or suddenly go on wild-eyed crazy rampage shake treat bag be a
              nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day.
              Cats are fats i like to pets them they like to meow back lick sellotape or funny little cat
              chirrup noise shaking upright tail when standing next to you mesmerizing birds or purr purr purr until owner pets why owner not pet
              me hiss scratch meow, but murder
              hooman toes for i like big cats and i can not lie.
              If it fits i sits kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                      and then take a nap find empty spot in cupboard and sleep all day i rule on my back you rub my tummy i bite you hard i like fish. </p>
            </div>
            <div className="containerRight">
              <img src={holder} ></img>
            </div>

          </div>
        </SecondTextContainer>
      </Second>
      <Second>
        <h1>Lorem Ipsum</h1>
        <ThirdTextContainer>
          <div className="container">
            <div className="containerRight">
              <img src={holder} ></img>
            </div>
            <div className="containerLeft">
              <p>Cat ipsum dolor sit amet, sleep everywhere, but not in my bed push your water glass
              on the floor. Cry louder at reflection attack like a vicious monster steal mom's crouton
              while she is in the bathroom and look at dog hiiiiiisssss poop on the floor, break a
              tree steal the warm chair right after you get up.  birds and sleep in the bathroom
              sink meow all night or suddenly go on wild-eyed crazy rampage shake treat bag be a
              nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day.
              Cats are fats i like to pets them they like to meow back lick sellotape or funny little cat
              chirrup noise shaking upright tail when standing next to you mesmerizing birds or purr purr purr until owner pets why owner not pet
              me hiss scratch meow, but murder
              hooman toes for i like big cats and i can not lie.
              If it fits i sits kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                      and then take a nap find empty spot in cupboard and sleep all day i rule on my back you rub my tummy i bite you hard i like fish. </p>
            </div>
          </div>
        </ThirdTextContainer>
      </Second>
    </MainContainer>
  )
}
