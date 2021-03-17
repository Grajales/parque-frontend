import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log('Contact Us:', e.target.newInquiry.value);
        this.props.createComments(e.target.newInquiry.value, 
                                    5, 
                                    e.target.newName.value,
                                    e.target.newEmail.value
        );
    }

    render() {
    
    return (
        <div className='ContactUs'>
            <main> 
            <h1 className="Contact-Title">Contact Us</h1>
   
            <form onSubmit={this.handleFormSubmit}>
                    name: <input className="name" type="text" name='newName'/><br />
                    email: <input className="email" type="text" name='newEmail'/><br />
                    Inquiry: <textarea className="Inquiry" type="text" name='newInquiry' rows="8"/><br />
                    <input type="submit" value="Send" className="button" />
            </form>
            </main>

        </div>
    )};
}

export default ContactUs;