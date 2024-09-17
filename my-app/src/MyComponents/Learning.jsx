import React, { useEffect, useState } from 'react'
import axios from "axios";
// "https://jsonplaceholder.typicode.com/users"
export default function Learning({balance}) {
     const [count, setCount] = useState(0);
     const Inc = () => setCount(count+1);
     const Dec = () => setCount(count-1) 

    return (
        <>  
            <button onClick={Inc}>Increament</button> &nbsp;
            {count}
            &nbsp; <button onClick={(Dec)}>Decreament</button>
        </>
    )
}
