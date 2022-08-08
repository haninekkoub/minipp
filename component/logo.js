import { motion } from "framer-motion"
import styles from "../styles/logo.module.scss";

const jump = {
    initial: { 

    },
    whileHover: {

        transition : {
            yoyo: Infinity,
            whene: "beforeChildren",
            staggerChildren: 0.5
        }
    },

  }

const jumpchild = {
    initial: { 
        y:0
    },
    whileHover: {
        y:-20,
        transition : {
            yoyo: Infinity,
            type: 'tween',
            whene: "beforeChildren",
            staggerChildren: 0.5
        }
    },

  }

export default function Logo() {
  const text = "Hani Nekkoub";
  const splited = text.split('')

  return (
    <motion.div className={styles.container}
            variants={jump}
            initial="initial"
            whileHover="whileHover" 
    >
        {splited.map((splited) => ( 
            <motion.span   
                variants={jumpchild}
            >
                {splited}
            </motion.span>
        ))}
    </motion.div>
  );
}

