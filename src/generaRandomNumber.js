function generaRandomNumber(limitX, limitY,axis){
    if(axis='x'){
        return Math.floor(Math.random()*limitX)
    }else{
        return Math.floor(Math.random()*limitY)
    }
}

export default generaRandomNumber