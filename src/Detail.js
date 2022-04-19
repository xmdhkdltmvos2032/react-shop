import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from "react-router-dom";
import "./Detail.scss"

function Detail(props){

  let [알람,알람창변경] = useState(false);
  let [inputdata,inputdatachange] = useState("")

  useEffect(()=>{
    let 타이머 = setTimeout(function(){
      알람창변경(true)
    },2000)
    console.log('안녕');
    return ()=>{clearTimeout(타이머)}
  },[])

  let {id} = useParams();
  let history = useHistory();

  return (
      <div className="container">

        {
          알람==false
          ? <Garbige></Garbige>
          : null
        }
        {inputdata}
        <input onChange={(e)=>{inputdatachange(e.target.value)}}></input>

        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${props.신발[id].id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5 red" >{props.신발[id].title}</h4>
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

function Garbige(){
  return (
    <div className='my-alert'>
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  )
}

export default Detail;