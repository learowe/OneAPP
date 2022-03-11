import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import _NavBarCP from './_NavBarCP'

function Week9PrimeFormSolo() {
  return (
    <div className="app-container">
      <_NavBarCP />

      <div className="content">
      <h1>Week 9 - Prime Form Solo</h1>

      <form action="#">
        <label htmlFor="input1">First Name</label>
        <InputText required id="input2"/><br />
        <label htmlFor="input2">Last Name</label>
        <InputText required id="input2"/><br />
        <label htmlFor="input3">How old are you?</label>
        <InputNumber inputId="integeronly" id="input3" /> <br />
        <button type="submit">Submit</button>

      </form>
      </div> 
    </div>
  );
}

export default Week9PrimeFormSolo