import React from 'react'

const FormGroup = ({lable, placeholder, value, onchange}) => {
  return (
    <div className="form-group">
      <label htmlFor={lable}></label>
      <input 
        value={value}
        onChange={onchange}
        type="text" name={lable} id={lable} placeholder={placeholder} required/>
    </div>
  )
}

export default FormGroup