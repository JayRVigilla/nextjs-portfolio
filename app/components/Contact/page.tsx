import React, { useState, DetailedHTMLProps, TextareaHTMLAttributes } from "react";
// import HTMLTextAreaElement from ""
import "./Contact.css";
import notebook from './../../images/jay-desk2.avif'

function Contact() {
  const INITIAL_FORM_STATE = { name: '', email:'', phone:'', comment:''}
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  const serviceID = "service_0ud2yse";
  const templateId = 'template_5wfk58b';
  const userID = "user_3SciijaBrOeBv8kzXApaS";

  function handleSubmit(evt) {
    evt.preventDefault();
    sendContactReq(templateId, formData)
    setFormData(INITIAL_FORM_STATE);
  }

  function sendContactReq (templateId, variables) {
    window.emailjs.send(serviceID, templateId, variables, userID)
      .then( res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }


  function handleChange(evt){
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <section className="Contact">

    {/* <MetaTags>
      <title>Contact | Jay Vigilla | Web Developer | Software Engineer</title>
      <meta name="description" content="I'd love to talk to you about projects (both fun and professional) or to talk about tech, food, and rescue dogs! Email me at jayrvigilla@gmail.com" />
      <meta property="og:title" content="Contact | Jay Vigilla | Web Developer | Software Engineer " />
      <meta property="og:description" content="I'd love to talk to you about projects (both fun and professional) or to talk about tech, food, and rescue dogs! Email me at jayrvigilla@gmail.com" />
      <meta property="og:image" content={notebook} />
      <link rel="canonical" href="http://jayvigilla.com/contact"/>
    </MetaTags> */}

      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            placeholder="name"
            size={35}
            value={formData.name}
            onChange={handleChange}
            />

        <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            size={35}
            value={formData.email}
            onChange={handleChange}
            />

        <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            size={35}
            value={formData.phone}
            onChange={handleChange}
          />

        <label htmlFor="comment">Comment</label>
          <textarea
            type={"text" as DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>>}
            name="comment"
            placeholder="comment"
            cols={30}
            rows={10}
            value={formData.comment}
            onChange={handleChange}
            />

        <button>Submit</button>
      </form>
    </section>
  );
}

export default Contact;