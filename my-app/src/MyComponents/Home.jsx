import React, { useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


export default function Home(){
    const [developerData, setDeveloperData] = useState([]);
    const [clientData, setClientData] = useState([]);
    const [paymentData, setPaymentData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    const fetchData = (dataType)=>{
        axios.get(`${import.meta.env.REACT_APP_API_URL}/${dataType}`)  //http://localhost:3001
        .then(res => res.data)
        .then(data => {
            switch(dataType){
                case "developerdata":
                    console.log(data);
                    return setDeveloperData(data);
                case "clientdata":
                    return setClientData(data);
                case "paymentdata":
                    return setPaymentData(data);
                case "projectdata":
                    return setProjectData(data);
            }            
        })
        .catch(error => console.log("No Data Found "+error))
    }
    const fetchDevData = ()=>{
        fetchData("developerdata");
        setClientData([]);
        setPaymentData([]);
        setProjectData([]);
    }
    const fetchclientData = ()=>{
        fetchData("clientdata");
        setDeveloperData([]);
        setPaymentData([]);
        setProjectData([])
    }
    const fetchpaymentData = ()=>{
        fetchData("paymentdata");
        setDeveloperData([]);
        setClientData([]);
        setProjectData([])
    }
    const fetchProjectData = ()=>{
        fetchData("projectdata");
        setDeveloperData([]);
        setPaymentData([]);
        setClientData([]);
    }

    const [values, setValues] = useState({        
        project: "",
        total_amount: "",
        amount_paid: "",
        delivery: ""
    })
    const handleChange = (e)=>{

        setValues({...values, [e.target.name]: [e.target.value]})
    }

    return(
        <>
            <div className="home-container">
                <div className="pages">
                    <div className="buttons">
                    <Button variant="outlined" className="box" onClick={fetchDevData}>Developer</Button>                    
                    <Button variant="outlined" className="box" onClick={fetchclientData}>Clients</Button>
                    <Button variant="outlined" className="box" onClick={fetchProjectData}>Projects</Button>
                    <Button variant="outlined" className="box" onClick={fetchpaymentData}>Payments</Button>
                    </div>
                    

                    <div className="section"> 
                        <div className="developers">
                            {developerData.length>0 && <TableContainer component={Paper}> <Table className="table" style={{width: "100%"}} rules="all">  
                               <TableHead>
                                <TableRow>
                                    <TableCell variant="head">Name</TableCell>
                                    <TableCell variant="head">Role</TableCell>
                                    <TableCell variant="head">Current-Task</TableCell>
                                    <TableCell variant="head">Salary</TableCell>
                                </TableRow> 
                                </TableHead> 
                                                            
                                <TableBody>
                                    {developerData.map(data =>
                                        <TableRow key={data.id}>
                                            <TableCell>{data.name}</TableCell>
                                            <TableCell>{data.role}</TableCell>
                                            <TableCell style={{display:"flex", flexDirection:"row",justifyContent: "center", gap:"50px"}}>
                                                <input type="text" value={data.task} onChange={handleChange}/>
                                                <select>
                                                    <option value="Completed">Fixed</option>
                                                    <option value="WIP">WIP</option>
                                                    <option value="Consult">Need Help</option>
                                                </select>
                                            </TableCell>
                                            <TableCell>{data.salary}</TableCell>                                                                                                                      
                                        </TableRow>                                
                                    )}
                                </TableBody>                                
                            </Table> </TableContainer>}
                        </div>                       
                        <div className="clients">
                            {clientData.length>0 && <TableContainer component={Paper}> <Table className="table" style={{width: "100%"}} rules="all">
                                <TableHead>
                                <TableRow>
                                    <TableCell variant="head">Name</TableCell>
                                    <TableCell variant="head">Project</TableCell>
                                    <TableCell variant="head">Contact</TableCell>
                                </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                {clientData.map(data =>
                                    <TableRow key={data.id}>
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell>{data.project}</TableCell>
                                        <TableCell>{data.contact}</TableCell>                                       
                                    </TableRow>                                
                                )}
                                </TableBody>
                            </Table> </TableContainer>}
                        </div> 

                        <div className="payments">
                            {paymentData.length>0 && <TableContainer component={Paper}> <Table className="table" style={{width: "100%"}} rules="all">
                                <TableHead>
                                <TableRow>
                                    <TableCell variant="head">Project</TableCell>
                                    <TableCell variant="head">Total_Amount</TableCell>
                                    <TableCell variant="head">Amount_Paid</TableCell>
                                    <TableCell variant="head">Delivery</TableCell>
                                </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                {paymentData.map(data =>
                                    <TableRow key={data.id}>
                                        <TableCell>{data.project}</TableCell>
                                        <TableCell>{data.total_amount}</TableCell>
                                        <TableCell>{data.amount_paid}</TableCell>                                       
                                        <TableCell>{data.delivery}</TableCell>                                       
                                    </TableRow>                                
                                )}
                                </TableBody>
                            </Table> </TableContainer>} 
                        </div> 

                        <div className="projects">
                            {projectData.length>0 && <TableContainer component={Paper}> <Table className="table" style={{width: "100%"}} rules="all">
                                <TableHead>
                                <TableRow>
                                    <TableCell variant="head">Project</TableCell>
                                    <TableCell variant="head">Progess</TableCell>
                                    <TableCell variant="head">Priority</TableCell>
                                    <TableCell variant="head">Issue</TableCell>
                                </TableRow>
                                </TableHead>

                                <TableBody>
                                {projectData.map(data =>
                                    <TableRow key={data.id}>
                                        <TableCell>{data.project}</TableCell>                                      
                                        <TableCell>{data.progress}</TableCell>                                       
                                        <TableCell>{data.priority}</TableCell>
                                        <TableCell>{data.issue}</TableCell>                                       
                                    </TableRow>                                                              
                                )}
                                </TableBody> 
                            </Table> </TableContainer>}
                        </div> 
                        
                    </div>
                
                </div>                
            </div>
        </>
    );
}