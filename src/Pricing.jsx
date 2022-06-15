import React, { Component } from "react";

export default class Pricing extends Component{
    state = {  };
    render() {
        return(
            <React.Fragment>
                <div className="text-center p-5">
                    <h1>The only on the phone business platform.</h1>
                    <h2>Lead Generation made convenient</h2>
                </div>
                
            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card card1 h-100">
                                <div className="card-body">
                                
                                <h5 className="card-title">Regular</h5>
                                <small className='text-muted'>Individual</small>
                                <br/><br/>
                                <span className="h2">$100</span>/month
                                <br/><br/>
                                <div className="d-grid my-3">
                                    <button className="btn btn-outline-dark btn-block">Select</button>
                                </div>
                                <ul>
                                    <li>5 Second SMS</li>
                                    <li>SMS Reader</li>
                                    <li>Support</li>
                                    
                                </ul>
                                </div>

                                
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card card2 h-100">
                                <div className="card-body">
                                
                                <h5 className="card-title">Business</h5>
                                <small className='text-muted'>Small Business</small>
                                <br/><br/>
                                <span className="h2">$250</span>/month
                                <br/><br/>
                                <div className="d-grid my-3">
                                    <button className="btn btn-outline-dark btn-block">Select</button>
                                </div>
                                <ul>
                                    <li>3 Second SMS</li>
                                    <li>Smart Dialer, SMS Reader</li>
                                    <li>Priority Support</li>
                                    
                                </ul>
                                </div>

                                
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card card3 h-100">
                                <div className="card-body">
                                
                                <h5 className="card-title">Enterprise</h5>
                                <small className='text-muted'>Large Company</small>
                                <br/><br/>
                                <span className="h2">$500</span>/month
                                <br/><br/>
                                <div className="d-grid my-3">
                                    <button className="btn btn-outline-dark btn-block">Select</button>
                                </div>
                                <ul>
                                    <li>1 Second SMS</li>
                                    <li>Smart Dialer, SMS Reader</li>
                                    <li>Top Priority Support</li>
                                    
                                </ul>
                                </div>

                                
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            </React.Fragment>
        );
    }
}