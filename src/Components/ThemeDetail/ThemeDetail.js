import React, { Component } from 'react';
// import { Switch, Route, Link, Redirect } from 'react-router-dom';
import "../App/App.css";
import "./ThemeDetail.css";
import Theme1 from '../Theme1/Theme1'
import Theme2 from '../Theme2/Theme2'
import Theme3 from '../Theme3/Theme3'
import Theme4 from '../Theme4/Theme4'

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
        <div> 
            <main>  
                 <div className="ThemeDetail"> 
                
                { this.props.match.params.id === "1" ? <Theme1 {...this.props} /> : null }
                { this.props.match.params.id === "2" ? <Theme2 {...this.props}/> : null }
                { this.props.match.params.id === "3" ? <Theme3 {...this.props} /> : null }
                { this.props.match.params.id === "4" ? <Theme4 {...this.props} /> : null }
               
                </div>
            </main> 
        </div>
            
        )
    }
}

export default ThemeDetail;