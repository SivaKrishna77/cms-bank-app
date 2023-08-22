import React from "react";
import "../style/dashboard.css";
import top from "../images/top.jpg";
import bank from "../images/bank.png";
import "../style/footer.css"


function Home() {

    return (<div id="dashboard">


        <div id="top-image">
            <img src={top} alt="top" />
        </div>

        <div id="card-wrapper">
            <div className="card">
                <i class="fas fa-university"></i>
                <div className="card-right">
                    <h3>Premium Banking</h3>
                    <p>A premier banking program designed with an array of offers.</p>
                </div>
            </div>
            <div className="card">
                <i class="fas fa-piggy-bank"></i>
                <div className="card-right">
                    <h3>Savings Account</h3>
                    <p>Pioneer Savings Account combines a series of top privileges.</p>
                </div>
            </div>
            <div className="card">
                <i class="fas fa-shield-alt"></i>
                <div className="card-right">
                    <h3>Security</h3>
                    <p>Tailor made solution for your delight, 100% safe and secure.</p>
                </div>
            </div>
        </div>


        <div id="content-container">
            <div className="content-box">
                <div className="left">
                    <img src={bank} alt="bank" />
                </div>
                <div className="right">
                    <h1>About us</h1>
                    <p>The Bank has gone through the various phases of its growth trajectory over hundred years of its existence. Growth of BootCat Bank was phenomenal. attaining the status of a national level player in terms of geographical reach and clientele segments. Eighties was characterized by business diversification for the Bank.</p>
                </div>

            </div>
            <div className="content-box">
                <div className="left">
                    <img src="https://superdr.in/home/images/mission.png" alt="mission" />
                </div>
                <div className="right">
                    <h1>Mission</h1>
                    <p>To provide a secure, agile, dynamic and conducive banking environment to customers with commitment to values and unshaken confidence, deploying the best technology, standards, processes and procedures where customer convenience is of significant importance and to increase the stakeholders’ value.</p>
                </div>
            </div>
            <div className="content-box">
                <div className="left">
                    <img src="https://i.pinimg.com/originals/57/0c/9e/570c9e66391ccae6756b9ba775477f09.png" alt="vision" />
                </div>
                <div className="right">
                    <h1>Vision</h1>
                    <p>To emerge as a ‘Preferred Bank’ by pursuing global benchmarks in profitability, operational efficiency, asset quality, risk management and expanding the global reach. Provide advanced and creative banking products and services for all our clients, both locally and internationally</p>
                </div>
            </div>
        </div>

        <footer style={{ textAlign:"center", height:"30px", fontFamily:"bold"}}>
           <span style={{fontWeight:"bold"}}>&copy; 2023 Customer Management System in Banking Application. All rights reserved.</span>
        </footer>
        </div>
    );
}
export default Home;