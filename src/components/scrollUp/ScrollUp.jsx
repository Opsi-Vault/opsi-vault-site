import React from 'react'
import "./scrollup.scss"
import {IoIosArrowUp} from "react-icons/io"
import { motion } from 'framer-motion'

const ScrollUp = (props) => {
  return (
    <motion.div className="scroll-up-button" initial={{opacity: 0, y: 50}} animate={props?.scrollPg > 0.5 ? {opacity: 1, y: 0} : {}} onClick={() => window.scroll(0, 0)}>
        <IoIosArrowUp className='scroll-button'/>
    </motion.div>
  )
}

export default ScrollUp;