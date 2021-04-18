
const AButton = ({clickHandler, label="Click Me"}) => {
  const style = {
    width: '150px',
    height: '50px',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: 'black',
    fontWeight: 'bold',
  };
  
  return <input type='button' onClick={clickHandler} style={style} value={label}/>

};

export default AButton;