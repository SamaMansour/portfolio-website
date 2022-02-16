import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser'
const contact = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  return (
   
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            
            +1 1234 556 75
          </div>
          <div className="c-info-item">
           
            contact@lama.dev
          </div>
          <div className="c-info-item">
            
            245 King Street, Touterie Victoria 8520 Australia
          </div>
        </div>
      </div>
      </div>


      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
  )
}
}
export default contact;