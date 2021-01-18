import React from "react";
// Styles
import { Hide } from "../styles";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <>
      <ScrollTop />
      <Contact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: "#fff" }}
      >
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch!</motion.h2>
            <motion.p variants={titleAnim} p>
              Contact us for a quote, or to join the team
            </motion.p>
          </Hide>
        </Title>
        <ContactForm>
          <div className="input-container">
            <div id="input-box">
              <div className="input">
                <label htmlFor="name" id="your-name">
                  Your Name
                </label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="email" id="email">
                  Email
                </label>
                <input type="email" />
              </div>
            </div>
            <div id="message-box" className="input">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="user-message"
                cols="30"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="submit">
            <button>Send Message</button>
          </div>
        </ContactForm>
      </Contact>
    </>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  color: black;
  p {
    color: #353535;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
  @media (max-width: 380px) {
    margin-top: 0;
    h2 {
      font-size: 3.75rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

const ContactForm = styled.div`
  width: 60%;
  padding: 1rem 2rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  div.input-container {
    display: flex;
    #message-box {
      margin-left: 10%;
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      textarea {
        font-size: 1.25rem;
      }
    }
    #input-box {
      margin-left: 2%;
      width: 50%;
      label {
        font-size: 1.25rem;
      }
      input {
        font-size: 1.25rem;
      }
    }
  }
  div.input {
    padding: 1rem;
  }
  input {
    width: 100%;
    font-size: 1rem;
    padding: 0.25rem;
  }
  // ------------------------------------------------------------------
  div.submit {
    width: 40%;
    margin: 2rem auto;
  }
  button {
    width: 100%;
    border-radius: 5px;
    background: #23d997;
    &:hover {
      background-color: white;
      color: #353535;
    }
  }
  @media (max-width: 380px) {
    width: 95%;
    div.input-container {
      display: flex;
      flex-direction: column;
      #message-box {
        margin-left: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        textarea {
          font-size: 1.25rem;
        }
      }
      #input-box {
        margin-left: 0;
        width: 100%;
        label {
          font-size: 1.25rem;
        }
        input {
          font-size: 1.25rem;
        }
      }
    }
    div.submit {
      width: 100%;
    }
  }
`;

export default ContactUs;
