import { useTexture } from '@react-three/drei'




function Earth (props) {

    const [earthMap,specularMap] = useTexture(['/earthmap1k.jpg','/earthspec1k.jpg']);

    return (
        <mesh>
            <sphereBufferGeometry args={[0.9999, 30, 30]} />
            <meshPhongMaterial color="grey" map={earthMap}  specularMap={specularMap}/>
        </mesh>
    )
}


export default Earth



