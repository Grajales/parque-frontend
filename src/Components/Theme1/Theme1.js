import React, { Component } from 'react';
// import { Switch, Route, Link, Redirect } from 'react-router-dom';
import "../App/App.css";

class ThemeDetail extends Component {
    
    handleCreateComments = (e) => {
        e.preventDefault();
        console.log('Add comment:', e.target.newComment.value);
        this.props.createComments(e.target.newComment.value, 
                                this.props.match.params.id);
    }

    render(){
       
        let comments = this.props.comments;
      
        let listOfComment = comments.filter(item =>  
            item.themeId === parseInt(this.props.match.params.id));
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
                <br /><br />
                {commentList}
                
                <form onSubmit={this.handleCreateComments}>
                    Enter comment: <textarea className="enterFeedback" type="text" name='newComment'/>
                    <input type="submit" />
                </form>
            </div>
            
        )
    }
}

export default ThemeDetail;