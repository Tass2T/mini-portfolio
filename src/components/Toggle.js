import {useState} from 'react'
import {motion} from 'framer-motion'

const Toggle = ({children ,title}) => {
    const [toggle, setToggle] = useState(true)
    return (
        // has to be a motion div for AnimateSharedLayout to work (+ layout on the motion div !)
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            // layout on element to avoid the stretching effect when moving
            <motion.h4 layout>{title}</motion.h4>
            {toggle && children}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle