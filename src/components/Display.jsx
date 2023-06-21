import React from 'react'

function Display({list,balance}) {
  return (
    <div className="reciept">
      {list.transaction.map((item)=>{
        return item.amount !==0 ? (<div>{item.desc+" "+item.amount}</div>):null
        })}
  {list.total !== 0 && <div>Total: {list.total}</div>}
  <div className='balance'>Balance:{balance}</div>
  </div>
  )
}

export default Display