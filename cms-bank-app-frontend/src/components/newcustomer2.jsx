import React from "react";
import axios from "axios";
import base_url from "../api";

import "../style/new.css"

function NewCustomer() {

    //var id=1;

    const [customer, setCustomer] = React.useState({});

    function formHandler(e) {

        axios.post(`${base_url}/save`, customer).then((res) => {
            console.log("DATA SENT");
            alert("New Customer Added");
        }, (err) => { console.log("DATA NOT SENT"); })

        e.preventDefault();

    }


    return (<div id="new">

        <form id="new-form" onSubmit={formHandler}>
            <h1>Add New Customer</h1><br /><br />

            <input onChange={(e) => {
                setCustomer({ ...customer, acc_no: e.target.value })
            }} required name="acc_no" type="number" placeholder="Account Number:" />
            <input onChange={(e) => {
                setCustomer({ ...customer, firstName: e.target.value })
            }} placeholder="First Name:" required name="firstName" type="text" />
            <input onChange={(e) => {
                setCustomer({ ...customer, lastName: e.target.value })
            }} placeholder="Last Name:" required name="lastName" type="text" />
            <input onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value })
            }} placeholder="Email:" required name="email" type="text" />
            <input onChange={(e) => {
                setCustomer({ ...customer, phNo: e.target.value })
            }} placeholder="Mobile:" required name="phNo" type="number" />
            <input onChange={(e) => {
                setCustomer({ ...customer, aadhar: e.target.value })
            }} placeholder="Aadhar:" required name="aadhar" type="number" />
            <input onChange={(e) => {
                setCustomer({ ...customer, bal: e.target.value })
            }} placeholder="Balance:" required name="bal" type="number" />
            <input onChange={(e) => {
                setCustomer({ ...customer, address: e.target.value })
            }} placeholder="Address:" required name="address" type="text" />
            <input onChange={(e) => {
                setCustomer({ ...customer, branch: e.target.value })
            }} placeholder="Branch:" required name="branch" type="text" />
            <button type="submit">Add</button>
            <button type="reset">Clear</button>
        </form>

    </div>);
}

export default NewCustomer;