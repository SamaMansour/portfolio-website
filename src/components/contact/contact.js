import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s1j2t2e",
        "template_pqmh2yp"
        
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:  "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:  "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:  "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor:  "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;