import React, { Component } from "react";
import "./ContactUs.css";
import Comment from "../Comment/Comment";

class ContactUs extends Component {
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log('Contact Us:', e.target.newInquiry.value);
        this.props.createComments(e.target.newInquiry.value, 
                                    5, 
                                    e.target.newName.value,
                                    e.target.newEmail.value
        );
        this.props.history.push('/');
        
    }

    render() {

        let comments = this.props.comments;
        console.log(comments)
 
        // let commentList = comments.map(item => {  
        //     return(   
        //      <div className="AllComments" key={item.id}>
        //         <li>
        //         {item.feedback}
        //         </li>
        //     </div>
        //     );
            
        // });
        // console.log("Comment List",commentList)

    
    return (
        <div className='ContactUs'>
            <main > 
            <div className="Contact-Title"> 
             <h1 >Cont&aacute;ctenos</h1>
            </div>
           
            <div className="formato"> 
                <form  onSubmit={this.handleFormSubmit}>
                        nombre: <input className="name" type="text" name='newName'/><br />
                        email: <input className="email" type="text" name='newEmail'/><br />
                        Comentario: <textarea className="Inquiry" type="text" name='newInquiry' rows="8"/><br />
                        <input type="submit" value="Send" className="button" />
                </form>
            </div>
           
            {/* <div className="commentList"> 
            {commentList}
            </div> */}
            
            </main>

        </div>
    )};
}

export default ContactUs;