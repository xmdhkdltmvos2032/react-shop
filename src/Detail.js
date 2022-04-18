import React, { useState } from 'react';
import { useHistory,useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let history = useHistory();

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${props.신발[id].id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.신발[id].title}</h4>
            <p>{props.신발[id].price}</p>
            <p>{props.신발[id].content}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.push("/");
            }}>뒤로가기</button> 
          </div>
        </div>
      </div> 
  )
}

export default Detail;