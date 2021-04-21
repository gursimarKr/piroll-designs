import React, { Component } from "react";
// import GoogleLogin from 'react-google-login';
import Layout from "./Layout";

import {FacebookSignIn,GoogleSignIn} from "google-facebook-signin-react";

class Signup extends Component {
  success(res) {
    return new Promise((resolve, reject) => {
      console.log(res);
      resolve();
    });
  }
  
  
  error(err) {
    console.log(err);
  }

  render() {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
      <Layout>
          <div className="site-content">
       
        <div class="project-background py-5">
        <div class="container">
         <div class="project-heading">
            <div class="row h-center my-4">
                <h1>Enter your details</h1>
            </div>
            <div class="row center">
                <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be a 
                    start of something beautiful
                </p>
            </div>
            
         </div>
         <p>
                 
        <FacebookSignIn
          appId={986347888436014}
          onReject={this.error}
          onResolve={this.success}
        >
          Facebook
        </FacebookSignIn>
        <GoogleSignIn
          client_id=
            "414505199833-l8je9dk3boan88dupfbodv8vk43dfc18.apps.googleusercontent.com"
          
          onReject={this.error}
          onResolve={this.success}
        >
          Google
        </GoogleSignIn>
     
         </p>
            <div class="row ">
                <form class="form-center">
           
               <div class="form-content">
                    <div class="form-row">
                        <div class="form-group col-md-6 ">
                            <input type="text" class="form-control" placeholder="Your Name"/>
                        </div> 
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control" placeholder="Your Email"/>
                        </div> 
                    </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Title"/>
                </div>
                    <div class="form-group">
                        {/* <!-- <label for="exampleFormControlTextarea1">Example textarea</label> --> */}
                        <textarea class="form-control" placeholder="Your Comment" id="Textarea1" rows="5"></textarea>
                      </div>
                      <div class=" text-center">
                        <button type="button" class="btn btn-message">send message</button>

                      </div>

            </div>
        </form>

            </div>
        </div>
    </div>

        
      </div>
      </Layout>
    );
  }
}
export default Signup