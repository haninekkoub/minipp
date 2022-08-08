import React from 'react'
import { motion } from "framer-motion"

const hand = {
    initial: { 
        opacity: 1,
    },
    hover: {
        rotate: [0, -20, 20],
        transition : {
            duration: 1.25,
            yoyo: Infinity,
            type: 'tween',
            stiffness: 400,
        }
    },
}

const wind = {
    initial: { 
        opacity: 1,
    },
    hover: {
        opacity: [1, 0, 1],
        transition : {
            duration: 1.5,
            yoyo: Infinity,
            type: 'tween',
            stiffness: 400   
        }
    }
}
  
export default function Hello() {
    return (
        <motion.svg width="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
            initial="initial"
            whileHover="hover"
            variants={hand}
        >      
            <motion.path d="M5.94614 30.7852C2.94714 37.9742 8.15914 46.6512 15.7301 48.1722C9.83014 44.2102 6.14614 37.8452 5.94614 30.7852" fill="black"
                variants={wind}/>
            <motion.path d="M15.73 48.1724L15.546 48.1334C15.569 48.1394 15.624 48.1484 15.73 48.1724ZM2 44.2614C2.489 50.2814 10.039 54.1394 15.457 51.6734C9.879 50.4754 6.179 49.3784 2 44.2614ZM46.504 22.7944C50.016 15.6264 45.029 6.7584 37.449 4.8314C43.248 9.0644 46.688 15.6554 46.504 22.7944ZM48.865 17.8484C53.057 14.1394 51.367 6.7604 46.533 4.3584C48.863 8.9234 49.684 12.7794 48.865 17.8484Z" fill="gray"
                variants={wind}/>
            <motion.path d="M60.5191 14.3452C59.5707 13.6202 58.4098 13.228 57.2161 13.2292C50.0101 13.2292 48.7181 22.6152 47.1191 26.2792C47.1191 26.2792 39.7301 10.8102 37.1601 5.70618C34.5101 0.441176 28.8531 1.52918 27.1961 4.39518C23.2601 0.316176 15.8231 3.60918 16.7711 8.56818C11.6671 8.17618 9.60406 13.2112 10.7371 16.4392C6.79206 16.3172 4.94806 21.1962 6.28206 24.6892C6.35106 24.8712 13.3551 38.6552 15.2411 43.3512C15.4601 43.8962 15.6811 44.4792 15.9131 45.0932C17.4381 49.1252 19.5271 54.6472 24.7531 59.0822C27.0031 60.9912 30.1181 62.0002 33.7641 62.0002C40.1901 62.0002 47.3451 58.8112 51.9931 53.8742C56.1561 49.4532 58.1511 44.0262 57.7631 38.1792C57.4151 32.9232 59.0871 27.9712 60.4301 23.9912C61.8871 19.6722 63.0371 16.2602 60.5191 14.3452V14.3452ZM54.5721 38.0052C55.3851 49.6332 43.7301 59.4442 33.8421 59.4442C30.8211 59.4442 27.6921 58.9562 25.7371 57.2972C20.1311 52.5392 18.7241 46.6512 17.0991 42.6132C15.1581 37.7822 10.3941 28.4992 8.08506 23.8292C7.14006 21.9172 8.71906 17.8482 11.4691 17.8482L19.4001 34.7162L22.4051 36.5202C22.4051 36.5202 15.5231 21.5222 13.3441 16.3532C12.0721 13.3352 14.2641 9.69118 17.2181 10.1662L27.0641 31.1822L30.0701 32.9902L18.5941 8.75718C18.5481 4.46218 24.4251 4.39518 25.7911 6.90318C29.2481 13.2512 35.7381 27.1822 35.7381 27.1822L38.7421 28.9892L27.9691 6.14618C30.0731 3.39218 33.7851 3.77818 35.3851 7.12118C37.3071 11.1362 45.4461 28.5752 45.4461 28.5752C37.4111 31.5872 31.9261 40.3182 37.6691 48.9252C33.1121 39.5152 41.1851 32.8652 45.9541 30.6672C47.7591 29.8342 48.4231 28.2592 48.4231 28.2592L48.4191 28.2602C49.0481 27.1212 49.0111 25.5982 49.7611 23.1332C51.3861 17.7982 53.6151 14.9712 56.8861 14.9712C57.6401 14.9712 58.5901 15.5352 59.0261 16.1782C61.2291 19.4292 53.8161 27.2012 54.5721 38.0052" fill="black"
                />
        </motion.svg>

    );
}