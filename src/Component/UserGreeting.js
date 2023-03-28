import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    return(this.state.isLoggedIn ? <div>Welcome Vishwash</div>):<div>Welcome Guest</div>
    //This the the if else approach to perform conditioanl rendering.<Approach one>
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwash</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Vishwash</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )

    ////this is the variable which stores the element needs to be rendered based on condition // Hence this the the element variable appraoch <Approach two>
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Vishwash </div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
  }
}

export default UserGreeting;
