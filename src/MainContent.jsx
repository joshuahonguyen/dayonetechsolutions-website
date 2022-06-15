import { Component } from "react";

export default class MainContent extends Component{
    state = {  };
    render() {
        return(
            
            <div class="container py-5 text-right text-dark">
                <div class="row p-5">
                <div class="col-lg-6 col-md-12 my-auto">
                    <h1 class="display-3">On the Phone Lead Generation</h1>
                    <h5 class="purple">Android software for your business.</h5>
                    <br/>
                    <a class="btn btn-dark btn-lg" href="pricing" role="button">Start now</a>
                </div>
                <div class="col-lg-6 col-md-12">
                    <img src="{% static 'Group 73.png' %}" class="img-fluid" alt="couple holding thier cat"/>
                </div>
                </div>
            </div>
        
        );
    }
}