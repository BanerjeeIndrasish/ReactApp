import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {actionCreators} from '../Redux-State/index';
import { bindActionCreators } from 'redux';

export default function Learning2() {

  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);


  
  const handleChange = (e)=>{
    setText(e.target.value);

  }
  const [text, setText] = useState("");  
  const data = [{name: "Indrasish", email: "abc@gmail.com"}, {name: "Sanju", email: "def@gmail.com"}]  
  const [searchType, setSearchType] = useState("name");
  

  const filterList = (arr, query)=>{
    query = query.toLowerCase();
    return arr.filter(item =>
      item.name.split(" ").some(word=> word.toLowerCase().startsWith(query))
    )
  }
  const filteredList = filterList(data, text);

  const changeType = (e)=>{
    setSearchType(e.target.value);
    

    console.log(searchType);
  }

 
  return (
    
  <>
      <select value={searchType} onChange={changeType}>         
          <option value="name">
            By Name
          </option>
          <option value="email">
            By Email
          </option>
      </select>

      <div id="Buttons">        
        <input type="text" value={text} onChange={handleChange}/>
          <ul>
            {filteredList.map(data =>
              <li key={data.email}>
                Name: {data.name}, Email: {data.email}
              </li>
            )}
          </ul>
      </div>
  </>            
  )
}

