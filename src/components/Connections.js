import * as THREE from 'three';
import { Tube } from '@react-three/drei';

import convertLatLenToCartesian from '../helpers/convertLatLenToCartesian';
import places from '../data/map_places.json';


const Connetctions = (props) => {

    const paths = []

    Object.keys(places).forEach(key => {
        const place = places[key];
        const placeCord = convertLatLenToCartesian(place.cords)

        if(place.connections) {
            place.connections.forEach( el => {
                const connectionCord = convertLatLenToCartesian(places[el].cords);
                paths.push(getCurve(placeCord, connectionCord))
            })
        }
    });

    return paths.map((path, index) => <Connetction path={path} key={index} />)
}


const Connetction = (props) => {

    return (
        <Tube args={[props.path, 20, 0.001]} tubularSegments={20} radius={0.01}>
            <meshPhongMaterial attach="material" color="#f3f3f3" />
        </Tube>
    )
}


const getCurve = (p1,p2) => {
    let v1 = new THREE.Vector3(...p1);
    let v2 = new THREE.Vector3(...p2);


    let points = [];

    for(let i = 0;  i <=20; i++) {
        let p = new THREE.Vector3().lerpVectors(v1,v2, i/20);
        p.normalize();
        p.multiplyScalar(1 + 0.1*Math.sin(Math.PI*i/20));
        points.push(p);
    }

    return new THREE.CatmullRomCurve3(points);
    // return points;
} 

export default Connetctions;
