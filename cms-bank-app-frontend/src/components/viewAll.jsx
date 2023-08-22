import React from "react";
import Customer from "./customer";
import base_url from "../api";
import axios from "axios";
import {Link} from "react-router-dom";
import "../style/customer.css"
import "../style/edit.css"

function ViewAll(){

    const [customer, setCustomer] = React.useState([]);

    React.useEffect(()=>{
            getAllCustomers();
    }, [customer]);

    function getAllCustomers(){
        axios.get(`${base_url}/all`).then((res)=>{
            setCustomer(res.data);
        }, (err)=>{
            console.log("DATA NOT FETCHED");
        });

    }

    return (<div id="customers">
   <h1>All Customers Info</h1>
   <Link className="add-btn" to="/new"><i class="fas fa-user-plus"></i><span>Add New Customer</span></Link>
   <br/>
   <br/>
   <div id="table-wrapper">
   <table>
       <thead>
       <tr>
           <th>CustId</th>
           <th>Account No</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email</th>
           <th>Mobile No</th>
           <th>Aadhar No</th>
           <th>Balance</th>
           <th>Address</th>
           <th>Branch</th>
           <th>Actions</th>
        </tr>
       </thead>
       <tbody>
       {
       customer.map((item, index)=>{
        return <Customer key={index} id={item.id} accno={item.acc_no} firstname={item.firstName} 
        lastname={item.lastName} email={item.email} phno={item.phNo} aadhar={item.aadhar} bal={item.bal} 
        address={item.address} branch={item.branch} />
       })
       }
       </tbody>
       </table>
       </div>
    </div>);
}

export default ViewAll;