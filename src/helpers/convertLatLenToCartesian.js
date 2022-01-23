

function convertLatLenToCartesian ([lat,len], radius=1) {
    const phi = (90-lat)*(Math.PI/180);
    const theta = (len+180)*(Math.PI/180);

    const x = -(Math.sin(phi)*Math.cos(theta))*radius;
    const z = (Math.sin(phi)*Math.sin(theta))*radius;
    const y = (Math.cos(phi))*radius;

    return [x,y,z]
}


export default convertLatLenToCartesian;