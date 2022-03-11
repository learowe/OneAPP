import React from 'react'
import { InputText } from 'primereact/inputtext';
import _NavBarCM from './_NavBarCM'

function Week9PrimeForms() {
  return (
    <div className="app-container">
      <_NavBarCM />
      <div className="content">
      <form action="#">
        <label htmlFor="input1">First Name</label>
        <input type="text" id="input1" /> 
        <br />
        <label htmlFor="input2">Last Name</label>
        {/* <input type="text" id="input2" /> */}
        <InputText required id="input2"/><br />
        <button type="submit">Submit</button>

      </form>
      </div>
    </div>
  );
}

export default Week9PrimeForms