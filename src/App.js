import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'

import Earth from './components/Earth';
import Light from './components/Light';
import Points from './components/Points';
import Connetctions from './components/Connections';



const App = function () {




  return (
    <>
    <Canvas concurent>
      <ambientLight />
      <Suspense fallback={null}>
        <Earth/>
        <Points/>
        <Light/>
        <Connetctions/>
      </Suspense>
      <OrbitControls 
        enablePan={true} 
        // enableZoom={false} 
        enableRotate={true} 
        maxDistance ={2}
        autoRotate={true} 
        />
    </Canvas>
    <Loader/>
    </>
  )
}

export default App;
