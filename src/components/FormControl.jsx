import React from 'react'
import { Form } from "react-bootstrap";

function FormControl({name , changingValue , placeHolder , validated, blur, focus }) {
  return (
    <Form.Control style={validated? {borderColor:"red"} : null}
    id="focus"
    type="text"
    name={name}
    onChange={changingValue}
    placeholder={placeHolder}
    onBlur={ blur }
    autoFocus={focus}
  />
  )
}

export default FormControl