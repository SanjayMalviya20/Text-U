import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}} >
{/* props.alert !== null? ==> props.alert && */}
{props.alert !== null? <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">    {/*props.alert && use for null if condition is !==null   note:if u can,t use the error show of null  */}
  <strong>{props.alert.type}</strong>: {props.alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    {/* <span aria-hidden="true">&times;</span> */}
  </button> 
</div>:false}
</div>
//  props.alert&&<div className={"alert alert-primary"} role="alert">
//  <strong>{props.alert.msg}</strong>
// </div> 
)
}
