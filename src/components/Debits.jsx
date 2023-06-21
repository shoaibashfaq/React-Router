import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import Display from "./Display";
import Form from "./Form"
import DefaulDisplay from "./DefaultDisplay";


function Debits({setValue,tDC}) {
  const [debitObj,setDebitObj]=useState({
    total:0,
    // an array of transactions
    transaction:[{
      amount:0,
      desc:""
    }]
  });
//  console.log("tDC in Debits"+tDC)

  function updateLedger(amountArg,descArg){
    setDebitObj((previous)=>{
      return {
        total:previous.total+parseInt(amountArg),
        transaction:[...previous.transaction,{amount:parseInt(amountArg),desc:descArg}]
      }
    });
    setValue(debitObj.total);
    // console.log("DebitObj"+debitObj);
  }
  
  return (
    <div className="Debits">

      <h2>Your Debits Page</h2>
      <Display list={debitObj} balance={tDC}></Display>
      <Form onValueChange={updateLedger}></Form>
      
    </div>
  );
}

export default Debits;
