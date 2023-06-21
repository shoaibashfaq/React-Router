import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Display from "./Display";
import Form from "./Form";
function Credits({setValue,tDC}) {
  const [creditObj,setCreditObj]=useState({
    total:0,
    // an array of transactions
    transaction:[{
      amount:0,
      desc:""
    }]
  });


  function updateLedger(amountArg,descArg){
    setCreditObj((previous)=>{
      return {
        total:previous.total+parseInt(amountArg),
        transaction:[
          ...previous.transaction,{amount:parseInt(amountArg),desc:descArg}
        ]
      }
    })
    console.log(creditObj);
    setValue(creditObj.total)

  }

  return (
    <div className="Credits">

      <h2>Credits</h2>
      <Display list={creditObj} balance={tDC}></Display>
      <Form onValueChange={updateLedger}></Form>
    
    </div>
  );
}

export default Credits;
