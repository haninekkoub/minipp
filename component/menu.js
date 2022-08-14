import styles from "../styles/menu.module.scss";
import { motion, AnimatePresence } from "framer-motion"
import Js from "../assets/js.svg"
import React from "../assets/react.svg"
import Shopify from "../assets/shopify.svg"
import Webflow from "../assets/webflow.svg"
import Nextjs from "../assets/nextjs.svg"

const fadeup = {
    initial: { 
        y: 300, 
        opacity: 0 
    },
    animate: {
        y: 0, 
        opacity: 1 ,
        transition: {
            delay: 0.2,
            duration: 0.2,

          },

    },
    exit: {
        y: 300, 
        opacity: 0 
    }
}
const fadedown = {
    initial: { 
        y: -300, 
        opacity: 0 
    },
    animate: {
        y: 0, 
        opacity: 1 ,
        transition: {
            duration: 0.2,

          },
    },
    exit: {
        y: -300, 
        opacity: 0 
    }
}
const titleleft = {
    initial : {
        x: 500,
    },
    animate: {
        x: 0,    
        transition: {
             delay: 0.6, 
        }
    }
}
const titleright = {
    initial : {
        x: 500,

    },
    animate: {
        x: 0,
        transition: {
             delay: 0.8, 
        }
    }
}
const textfade = {
    initial : {
        y: 0,    
    },
    animate: {
        y: 0,    
        transition: {
            delayChildre: 0.8,
            staggerChildren: 0.25,
        }
    }  
}
const wordfade = {
    initial : {
        y: 400,
    },
    animate: {
        y: 0, 
        transition: {
            duration: .8
       }
    }  
}
const paragraph = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1, 
            duration: .8
        }
    }
}
export default function Menu() {
  return (
    <div className={styles.container}>
      <AnimatePresence  >
        <motion.div className={styles.menuLeft} variants={fadedown} initial="initial"  animate="animate" exit='exit'>
            <motion.h2 className={styles.title} variants={titleleft}>
                About
            </motion.h2>
            <motion.div className={styles.description}variants={textfade}>
                <motion.div  className={styles.herotitle} >
                    <motion.h3 variants={wordfade}>About</motion.h3>
                    <motion.h3 variants={wordfade}>me.</motion.h3> 
                </motion.div>
                <motion.div className={styles.hidden}>
                    <motion.h6 variants={wordfade}> Interactive Front-end Developer</motion.h6>
                </motion.div>
                <motion.p variants={paragraph}>
                    i’m <span>hani nekkoub </span>, a 22-year-old Algerian <span>freelance front-end developer</span>.
                </motion.p>
                <motion.p variants={paragraph}>
                    Specializing in refined <span>digital web experiences</span> with a focus on <span>animated</span>, <span>responsive</span>, and <span>interactive content</span>.
                </motion.p>
                <motion.div className={styles.capabilities} variants={paragraph}>
                    <Js className={styles.js}/>
                    <Nextjs />
                    <React />
                    <Shopify />
                    <Webflow />
                </motion.div>
            </motion.div>
        </motion.div>

        <motion.div className={styles.menuRight} variants={fadeup} initial="initial"  animate="animate">
            <motion.h2 className={styles.title} variants={titleright} >
                Contact
            </motion.h2>
            <motion.div className={styles.description}>
                <motion.div  className={styles.herotitle} >
                    <motion.h3 variants={wordfade}>Let's</motion.h3>
                    <motion.h3 variants={wordfade}>Talk.</motion.h3> 
                </motion.div>
                <motion.p variants={paragraph}>
                    New projects new ideas or independent request come say hello
                </motion.p>
                <div className={styles.cta}>
                    Hire me
                </div>
            </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

