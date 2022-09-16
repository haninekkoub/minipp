import React, { useEffect, useState } from 'react';
import styles from "./game.module.scss";




export default function game() {



    const [count, setCount] = useState(0);
    const add = () => {
        if(count !== 50) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(count = 0 )
    }

    return (
        <div className={styles.container}>

            <div className={styles.box}>
                <h1>the game</h1>
                <div className={styles.screen}>
                    <button className={styles.click} onClick={add}>
                        click me
                    </button>
                    <div className={styles.result}>
                        <button className={styles.reset} onClick={reset}>
                            reset
                        </button>
                        <h3 className={styles.count}>
                            {count}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}