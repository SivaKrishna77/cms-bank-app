import React from "react";
import axios from "axios";
import base_url from "../api";
import { useLocation, Link } from "react-router-dom";
import "../style/edit.css"

function UpdateCustomer() {

    function formHandler(e) {

        axios.put(`${base_url}/update/${id}`, customer).then((res) => {
            console.log(customer);
            alert("Customer Info Updated");
        }, (err) => { console.log("DATA NOT SENT"); })

        e.preventDefault();

    }

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    const [customer, setCustomer] = React.useState({});

    React.useEffect(() => {
        getCustomer();
    }, []);

    function getCustomer() {
        axios.get(`${base_url}/getById/${id}`).then((res) => {
            setCustomer(res.data);
        }, (err) => {
            console.log("DATA NOT FETCHED");
        });
    }

    return (
        <div id="edit">
            <br /> <h1>Update Customer</h1>
            <form id="edit-form" onSubmit={formHandler}>
                <input name="id" type="number" placeholder="Customer ID:" value={customer.id} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, acc_no: e.target.value });
                }} placeholder="Account Number:" name="acc_no" type="number" value={customer.acc_no} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, firstName: e.target.value });
                }} placeholder="First Name:" name="firstName" type="string" value={customer.firstName} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, lastName: e.target.value });
                }} placeholder="Last Name:" name="lastName" type="string" value={customer.lastName} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, email: e.target.value });
                }} placeholder="Email:" name="email" type="text" value={customer.email} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, phNo: e.target.value });
                }} placeholder="Mobile:" name="phNo" type="text" value={customer.phNo} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, aadhar: e.target.value })
                }} placeholder="Aadhar:" name="aadhar" type="number" value={customer.aadhar} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, bal: e.target.value })
                }} placeholder="Balance:" name="bal" type="number" value={customer.bal} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, address: e.target.value })
                }} placeholder="Address:" name="address" type="text" value={customer.address} />
                <input onChange={(e) => {
                    setCustomer({ ...customer, branch: e.target.value })
                }} placeholder="Branch:" name="branch" type="text" value={customer.branch} />

                <button type="submit">Update</button>
                <Link to="/view">
                    <button type="reset">Cancel</button></Link>
            </form>

        </div>
    )
}

export default UpdateCustomer;

/*
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditRest() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [customer, setCustomer] = useState({
        acc_no: 0,
        firstName: "",
        lastName: "",
        email: "",
        phNo: 0,
        aadhar: 0,
        bal: 0,
        address: "",
        branch: ""
    });

    const { acc_no, firstName, lastName, email, phNo, aadhar, bal, address, branch } = customer;

    const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadCustomer();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9090/update/${id}`, customer);
        navigate("/");
    };

    const loadCustomer = async () => {
        const result = await axios.get(`http://localhost:9090/getByid/${id}`);
        setCustomer(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Update Customer</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="acc_no" className="form-label">
                                AccNo
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Account Number"
                                name="acc_no"
                                value={acc_no}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                FirstName
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                LastName
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phNo" className="form-label">
                                MobileNo
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Mobile No"
                                name="phNo"
                                value={phNo}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aadhar" className="form-label">
                                Aadhar
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Aadhar"
                                name="aadhar"
                                value={aadhar}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bal" className="form-label">
                                Balance
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Balance"
                                name="bal"
                                value={bal}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="branch" className="form-label">
                                Branch
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Branch"
                                name="branch"
                                value={branch}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/FrontPage">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}*/