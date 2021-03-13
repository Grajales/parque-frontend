import React, { Component } from 'react';
// import { Switch, Route, Link, Redirect } from 'react-router-dom';
import "../App/App.css";

class ThemeDetail extends Component {

    render(){
       
        let comments = this.props.comments;
      
        let listOfComment = comments.filter(item =>  
            item.themeId == this.props.match.params.id);
        let commentList = listOfComment.map(item => {    
            return (
            <div className="AllComments" key={item.id}>
                <li>
                {item.feedback}
                </li>
              </div>
            );
        });
        // console.log(listOfComment);
        return(
            <div className="ThemeDetail"> 
                Theme Detail Page!!!
                <li>{commentList}</li>
            </div>
            
        )
    }
}

export default ThemeDetail;