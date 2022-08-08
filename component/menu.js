import styles from "../styles/menu.module.scss";
import { motion, AnimatePresence } from "framer-motion"

const fadeup = {
    initial: { 
        y:  '150%', 
        opacity: 0 
    },
    animate: {
        y: 0 ,
        opacity: 1,
        transition : {
            duration: 1,
            type: 'spring',
            stiffness: -200,

        }
    },
    exit : {
        y:  '150%', 
        opacity: 0 
    }
}

export default function Menu() {
  return (
    <div className={styles.container}>
        <AnimatePresence>
        <motion.div className={styles.menuLeft}
            variants={fadeup}
            initial="initial"
            animate="animate"
            exit= "exit"
        >
            <h2 className={styles.title}>
                About
            </h2>
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

        <motion.div className={styles.menuRight}>
            <h2 className={styles.title}>
                Contact
            </h2>
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

