import * as THREE from 'three';
import convertLatLenToCartesian from '../helpers/convertLatLenToCartesian';
import { Html } from '@react-three/drei'

import places from '../data/map_places.json';


function Points (props) {

    return Object.keys(places).map((el) => {
        const place = places[el];
        const position = new THREE.Vector3(...convertLatLenToCartesian(place.cords));

        return <Point key={el} position={position} title={el} />
    })
}


function Point (props) {

    const tag_position = new THREE.Vector3().copy(props.position).multiplyScalar(1.01)

    return (
        <>
        <mesh {...props}>
            <sphereBufferGeometry args={[0.01, 10, 10]}/>
            <meshStandardMaterial color="white" />
        </mesh>
        <Html occlude position={tag_position}>
            <p>{props.title}</p>
        </Html>
        </>
    )
}


export default Points;