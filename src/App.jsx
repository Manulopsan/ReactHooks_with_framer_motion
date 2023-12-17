import checkColisionBorder from './checkColisionBorder'
import generaRandomNumber from './generaRandomNumber'
import checkCollider from './checkCollider'

import { useState } from 'react'
import {motion} from 'framer-motion'
import './App.css'
import Square from './Square'

function App() {
    //Hacer 5 movimientos aleatorios
    //Generar aleatoriamente unos cuadrados pequeños. Los rojos restan 1 punto. Los verden suman 1 punto


  //useState para la posición del círculo que se mueve por la pantalla
  const [pos, setPosition] = useState({x:[0,0,0,0,0],y:[0,0,0,0,0], r:[0,0,0,0,0]})

    //Generación posiciones aleatorias inicialmente para los círculos pequeños
    const WIDTH_SPACE = 780
    const HEIGHT_SPACE = 780
    let posXr=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'x')
    let posXg=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'x')
    let posYr=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'y')
    let posYg=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'y')

  
  //useState para los círculos que se generan aleatoriamente en la pantalla cada vez que el círculo
  //pasa por encima de uno de ellos
  const [posRandomRedCircle, setPositionRandomRedCircle] = useState({posXr,posYr})
  const [posRandomGreenCircle, setPositionRandomGreenCircle] = useState({posXg,posYg})

  //useState para el resultado
  const [result, setResult] = useState({score:0, numMove:0})
  
  

  const handClick = () =>{

    //Generar 5 posiciones X y otras 5 posiciones Y que son las componentes de los próximos 5 movimemintos
    //Además se genera el valor de la rotación del objeto
    for(let numMovement = 0; numMovement<5; numMovement++){
      const moveX = 35*(Math.random() <0.5 ?1:-1)
      const moveY = 35*(Math.random() <0.5 ?1:-1)
      pos['x'][numMovement] = pos.x[numMovement ===0?4:numMovement-1] + moveX
      pos['y'][numMovement] = pos.y[numMovement ===0?4:numMovement-1]  + moveY
      pos['r'][numMovement] = pos.r[numMovement ===0?4:numMovement-1]  + 30
    }
    //Se actualizan el número de movimientos del círculo grande
    result.numMove = result.numMove +5
    
    //Antes de actualizar los próximos movientos, comprobamos las colisiones con los bordes del container
    const resultColision = checkColisionBorder(pos['x'],pos['y'])
    pos['x'] = [...resultColision[0]]
    pos['y'] = [...resultColision[1]]

    //Comprobar si el círculo grande se solapa con alguno de los dos círculos pequeños
    //Hay que detectar si se trata del círculo rojo o el verde
    const posMainCircle = ({x:pos['x'],y:pos['y']})
    const posRedCircle = ({x:posRandomRedCircle.posXr, y:posRandomRedCircle.posYr})
    const posGreenCircle = ({x:posRandomGreenCircle.posXg, y:posRandomGreenCircle.posYg})  

    const colliderResult = checkCollider(posMainCircle, posRedCircle, posGreenCircle)

    //Se comprueba si ha habido alguna colisión y en el caso de haberla cuántas veces ha ocurrido
    //Cada vez que el círculo grande colisiona con el círculo rojo, se resta 1 punto y cada vez
    //que el círculo grande colisiona con el círculo verde, se suma 1 punto
    if(colliderResult['red']){
      result.score = result.score - colliderResult['numRedCollider']
      //Hay que cambiar la posición del círculo rojo
      posXr=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'x')
      posYr=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'y')
      setPositionRandomRedCircle({posXr,posYr})
      //CORREGIR ESTO *******
      //********************
    }

    if(colliderResult['green']){
      result.score = result.score + colliderResult['numGreenCollider']
      //Hay que cambiar la posición del círculo verde
      posXg=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'x')
      posYg=generaRandomNumber(WIDTH_SPACE,HEIGHT_SPACE,'y')
      posXr = posXr
      posYr = posYr
      setPositionRandomGreenCircle({posXg,posYg})
      //CORREGIR ESTO *******
      //********************
    }
    setPosition({x:pos['x'],y:pos['y'],r:pos['r']})

    
  }

  return (
    <div className='mainPage'>
      <div className='groupLeft'>
      <button onClick={handClick}>Mover</button>
      <div className='rectangle'>
        <motion.div style={{position:'absolute', left:350, bottom:'350px'}} className='circle' transition={{duration:1}} animate={{x:[...pos['x']],y:[...pos['y']], rotate:[...pos['r']]}}>Prueba</motion.div>
        <Square color="red" posX={posRandomRedCircle.posXr} posY={posRandomRedCircle.posYr}></Square>
        <Square color="green" posX={posRandomGreenCircle.posXg} posY={posRandomGreenCircle.posYg}></Square>
      </div>
      </div>
      <div className='containerText'>
        <h2>Puntuación: {result.score} </h2>
        <p>Cada vez que colisiona con un círculo rojo se resta un punto y cada vez que colisiona con un círculo verde, se suma un punto.</p>
        <h3>Número de movimientos: {result.numMove}</h3>
      </div>
    </div>
  )
}

export default App
