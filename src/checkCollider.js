function checkCollider(positionMainCircle, positionRedCircle, positionGreenCircle){
    const WIDTH_OBJECT = 100

    let colliderResult = [{red:false,numRedCollider:0,green:false, numGreenCollider:0}]

    for(let numMovement=0; numMovement<5; numMovement++){
        //Ir comprando cada uno de los pares de posiciones X - Y de positionMainCircle
        //Comprobar círculo rojo
        if(positionRedCircle['x']>=(400+positionMainCircle['x'][numMovement]-(WIDTH_OBJECT/2)) && 
           positionRedCircle['x']<=(400+positionMainCircle['x'][numMovement]+(WIDTH_OBJECT/2)) &&
           positionRedCircle['y']>=(400+positionMainCircle['y'][numMovement]-(WIDTH_OBJECT/2)) && 
           positionRedCircle['y']<=(400+positionMainCircle['y'][numMovement]+(WIDTH_OBJECT/2))){
            colliderResult['red'] = true
            colliderResult['numRedCollider'] =+1
        }
        //Comprobar círculo verde
        if(positionGreenCircle['x']>=(400+positionMainCircle['x'][numMovement]-(WIDTH_OBJECT/2)) && 
           positionGreenCircle['x']<=(400+positionMainCircle['x'][numMovement]+(WIDTH_OBJECT/2)) &&
           positionGreenCircle['y']>=(400+positionMainCircle['y'][numMovement]-(WIDTH_OBJECT/2)) && 
           positionGreenCircle['y']<=(400+positionMainCircle['y'][numMovement]+(WIDTH_OBJECT/2))){
            colliderResult['green'] = true
            colliderResult['numGreenCollider'] =+1
           }
    }

    //Esta función tiene que devolver si el círculo grande se ha superpuesto con alguno de los dos círculos
    return colliderResult
}

export default checkCollider