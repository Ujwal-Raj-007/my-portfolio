import React from "react";
import "./Contact.css";

const Contact = () => {
  const imageUrl="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png"
  return (
    <>
    <h2>Contact Me</h2>
    <section id="contact" className="contact">
      
      <p>Email: <a href="mailto:youremail@example.com">ujwalrajkv11@gmail.com</a></p>
      <p>LinkedIn: <a href="#">www.linkedin.com/in/ujwalraj</a></p>
      <p>GitHub: <a href="#">https://github.com/Ujwal-Raj-007</a></p>
      <a href="https://www.instagram.com/___.raj_._"><img className="ig" src={imageUrl} alt="lof"/></a>      
    </section>
    </>
  );
};

export default Contact;
