//funcionalidad de que hace el círculo ocuando toca los bordes del rectángulo rojo

function checkColisionBorder(posX, posY){

    //Medidas tablero
    const WIDTH_SPACE = 800
    const HEIGHT_SPACE = 800
    //Medidas objeto
    const WIDTH_OBJECT = 100
    //Posicion inicial objeto en el eje Y respecto a la parte superior del tablero
    const POS_INITIAL_Y = 400

    const LIMIT_RIGHT_X = (WIDTH_SPACE/2)-(WIDTH_OBJECT/2) 
    const LIMIT_LEFT_X = -((WIDTH_SPACE/2)-(WIDTH_OBJECT/2))
    const LIMIT_UP_Y = -(POS_INITIAL_Y-(WIDTH_OBJECT))
    const LIMIT_DOWN_Y = (HEIGHT_SPACE-POS_INITIAL_Y)-(WIDTH_OBJECT/2)
    //Comprobamos los valores en el eje x
    posX.map((position,index) =>{
        if(position > LIMIT_RIGHT_X){
            posX[index] = LIMIT_RIGHT_X
        }else if(position<LIMIT_LEFT_X){
            posX[index] = LIMIT_LEFT_X
        }
    })
    posY.map((position,index) =>{
        if(position > LIMIT_DOWN_Y){
            posY[index] = LIMIT_DOWN_Y
        }else if(position<LIMIT_UP_Y){
            posY[index] = LIMIT_UP_Y
        }
    })

    const constUpdatePosition = [posX,posY]

    return constUpdatePosition
}



export default checkColisionBorder