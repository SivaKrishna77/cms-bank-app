import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import base_url from "../api";
import "../style/customer.css"

function Customer(props){

  function deleteUser(id) {
        axios.delete(`${base_url}/delete/${id}`).then((res)=>{
            alert(`Customer ${id} Deleted`);
        }, (err)=>{
            console.log("Unable to delete");
        });
    }


    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.accno}</td>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.email}</td>
        <td>{props.phno}</td>
        <td>{props.aadhar}</td>
        <td>₹{props.bal}</td>
        <td>{props.address}</td>
        <td>{props.branch}</td>
        <td className="actions">

        <button className="list-btn delete" onClick={()=>deleteUser(props.id)}>
            <i class="fas fa-trash-alt"></i></button>
      <Link  to={`/update?id=${props.id}`}><button className="list-btn edit">
        <i class="fas fa-user-edit"></i></button></Link>
        </td>
    </tr>);
}

export default Customer;