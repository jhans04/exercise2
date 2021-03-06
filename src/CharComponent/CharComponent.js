import React from 'react';

const boxStyle = {
  display:'inline-block',
  padding : '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

const charComponent = (props) => {
  return (
    <div onClick = {props.clicked} style = {boxStyle}>
      {props.char}
    </div>
  )
}

export default charComponent;
