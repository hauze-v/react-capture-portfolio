import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion"; // Detects if our layout changes and if so, animates it

const FaqSection = () => {
  // Our State
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Eos, suscipit. Sapiente optio, numquam rerum dicta quidem ab
              molestiae, obcaecati error reprehenderit magnam eum ipsa. Dolore
              libero exercitationem omnis repellendus aspernatur!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Eos, suscipit. Sapiente optio, numquam rerum dicta quidem ab
              molestiae, obcaecati error reprehenderit magnam eum ipsa. Dolore
              libero exercitationem omnis repellendus aspernatur!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Eos, suscipit. Sapiente optio, numquam rerum dicta quidem ab
              molestiae, obcaecati error reprehenderit magnam eum ipsa. Dolore
              libero exercitationem omnis repellendus aspernatur!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Eos, suscipit. Sapiente optio, numquam rerum dicta quidem ab
              molestiae, obcaecati error reprehenderit magnam eum ipsa. Dolore
              libero exercitationem omnis repellendus aspernatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    margin-bottom: 1rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    padding-bottom: 1rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
