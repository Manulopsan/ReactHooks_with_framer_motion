function Square({color,posX,posY}){
    return (
        <>
            <div style={{backgroundColor:color, borderRadius:'20px', width:'20px', height:'20px', position:'absolute', left:posX, top:posY}}></div>
        </>
    )
}

export default Square