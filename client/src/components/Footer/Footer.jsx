import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer=()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* col1 */}
                    <div className="col">
                        <h4>Contact Us </h4>
                        <ul className="list-unstyled"></ul>
                        <li>321-654-8977</li>
                        <li>Palestine</li>
                        <li>123 street South</li>
                    </div>
                    {/* col2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>daa jjj</li>
                            <li>other stuff</li>
                            <li>aaaa</li>
                        </ul>
                    </div>
                    {/* col3 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>dffffj</li>
                            <li>other stuff</li>
                            <li>aaaa</li>
                        </ul>
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Hotelcom|All right reserved by <a href="/"> Hotelcom.</a>|<a href="/"> Terms Of Service</a>|<a href="/"> Privacy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;