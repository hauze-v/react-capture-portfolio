import home1 from "../img/home1.png";
// Styles
import { Layout, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
// Animation
import { titleAnim, fadeAnim, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  // Animation variables
  /* const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  }; */

  /* To break an element out of the staggering children of animation, add the hidden and show animate properties */
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnim}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
