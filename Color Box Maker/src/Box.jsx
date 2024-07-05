const Box = ({removeBox, id, width, height, backgroundColor}) => {
  return(

    <div style={{width: `${width}`, height: `${height}`, backgroundColor:`${backgroundColor}`}}>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  )
}

export default Box;