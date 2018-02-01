import React from 'react'


const inputValidation = (props) => {
  let validationMssg = "Text long enough"
  if(props.textLength<=5){
    validationMssg = 'Text too short'
  }
  return (
    <div>
      <p>{validationMssg}</p>
    </div>
  )
}
export default inputValidation;
