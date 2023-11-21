import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import Main from './Main';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: "99vw", display: "flex", justifyContent: 'center', alignItems: 'center'}}>
      <Main />
    {/* <div style={{ minHeight: '100vh', width: "100vw" }}> */}
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{zIndex: "-1 !important", position: "absolute"}}
        options={{
          background: {
            color: {
              value: "#e5f3ff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00FFFF",
            },
            links: {
              color: "#D3D3D3",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    {/* </div> */}
    </div>
  );
}

export default App;
