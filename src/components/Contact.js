import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
        <div>
            <h2>Contact</h2>
            <h3>I will always be available for new opportunities <br />Use the contact form, or contact me at <span className="text-danger">contact@sgcoding.media</span></h3>
        </div>

        <form name="contact" method="POST" action="index.php">
            <div className="form-user-field">
                <div className="form-group">
                    <label htmlFor="name">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" name="name" required="required" />
                </div>
            </div>
            <div className="form-user-field">
                <div className="form-group">
                    <label htmlFor="email">E-Mail <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" name="email" required="required" />
                </div>
            </div>
            <div className="form-user-field">
                <div className="form-group">
                    <label htmlFor="topic">Topic <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="topic" name="topic" required="required" />
                </div>
            </div>
            <div className="form-user-field">
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="name" name="website" />
                </div>
            </div>
            <div className="form-user-textfield">
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="12" name="message" required="required"></textarea>
                    <button className="btn btn-lg btn-block sendButton">Send</button>
                </div>
            </div>

        </form>



    </section>

  );
}

export default Contact;
