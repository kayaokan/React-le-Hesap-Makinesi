import React, { Component } from "react";
import "./Input.css";

class Input extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Input">
                {this.props.displayInput}
            </div>

        )
    }

}
export default Input;