import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber'


function Light (props) {

    const light = useRef();
    const camera = useThree((state) => state.camera)


    useFrame(()=> light.current.position.copy(camera.position));


    return <pointLight intensity={0.7} ref={light} />

}


export default Light;