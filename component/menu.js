import styles from "../styles/menu.module.scss";
import { motion, AnimatePresence } from "framer-motion"

const fadeup = {
    initial: { 
        y: 300, 
        opacity: 0 
    },
    animate: {
        y: 0, 
        opacity: 1 ,
        transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.8,
          },
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
            when: "beforeChildren",
            staggerChildren: 0.5,
          },
    }
}
const text = {
    initial : {
        x: 300,

    },
    animate: {
        x: 0,    
    }
}
export default function Menu() {
  return (
    <div className={styles.container}>
      <AnimatePresence  >
        <motion.div className={styles.menuLeft} variants={fadeup} initial="initial"  animate="animate">
            <motion.h2 className={styles.title} variants={text}>
                About
            </motion.h2>
            <div className={styles.description}>
                <h5>
                    Front End Devloper
                </h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, amet ornare placerat tellus, amet lectus leo a quam. Egestas malesuada sagittis mattis quisque facilisis arcu ac.
                    Malesuada congue in cursus tortor. Egestas venenatis ipsum nunc ut tristique libero sit. Feugiat habitant amet malesuada fusce risus.
                </p>
            </div>
        </motion.div>

        <motion.div className={styles.menuRight} variants={fadedown} initial="initial"  animate="animate">
            <motion.h2 className={styles.title} variants={text} >
                Contact
            </motion.h2>
            <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ac eu nec ut at nibh vestibulum.
                </p>
                <div className={styles.cta}>
                    Say Hello
                </div>
            </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

