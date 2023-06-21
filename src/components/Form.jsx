import React,{useState}from 'react';

function Form({onValueChange}) {
  const [amount,setAmount]= useState(0);
  const [desc,setDesc]= useState("");

  function handleSubmit(event){
    event.preventDefault();
    onValueChange(parseInt(amount),desc);
  }

  function updateDescription(event){
    setDesc(event.target.value)
  }

  function updateAmount(event){
    setAmount(event.target.value)
  }


  return (
    <div class="transaction-form">
    <form class="form" onSubmit={handleSubmit}>
        <input class="input-field" type="text" onChange={updateDescription} placeholder='Description'/>
        <input class="input-field" type="text" onChange={updateAmount} placeholder='Amount'/>
        <button class="submit-button" type='submit'>Submit Transaction</button>
    </form>
</div>

  )
}

export default Form