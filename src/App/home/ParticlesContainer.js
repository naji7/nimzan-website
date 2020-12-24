import React, { Component } from "react";
import Particles from "react-particles-js";



class ParticlesContainer extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#f4f5e2",
            },
            shadow: {
              enable: true,
              color: "#f4f5e2",
              blur: 5,
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#f4f5e2",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: false,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
              shadow: {
                enable: true,
                color: "#3ca9d1",
                blur: 5,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 3000,
                rotateY: 3000,
              },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: 0.4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
            mouse: {},
          },
          retina_detect: false,
        }}
      />
    );
  }
}

export default ParticlesContainer;