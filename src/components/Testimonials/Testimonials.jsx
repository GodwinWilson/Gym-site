import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const transition = {type:'spring', duration:3}
    const [selected, setSelected] = useState(0)
    const testLen = testimonialsData.length 

  return (
    <div className='testimonials'>
        <div className='test-l'>
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <motion.span
                key={selected}
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:100}}
                transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'var(--blue)'}}>{testimonialsData[selected].name} - </span>
                 {testimonialsData[selected].status}
            </span>
        </div>
        <div className='test-r'>
            <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{...transition, duration:2}}
            ></motion.div>
            <motion.div
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{...transition, duration:2}}
            ></motion.div>
            <motion.img 
                key={selected}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} 
                alt="" />
            <div className='arrows'>
                <img 
                    onClick={() => {
                        selected == 0 ? setSelected(testLen - 1) : setSelected((prev) => prev - 1)
                    //if selected is the first testimonial, then take the slide to the last testimonial in the array else take the slide to the previous testimonial
                    }}
                    src={leftArrow} 
                    alt=""/>
                <img 
                    onClick={() => {
                        selected == testLen-1 ? setSelected(0) : setSelected((prev) => prev+1)
                    //if selected is the last testimonial, then take the slide to the first testimonial in the array else take the slide to the next testimonial
                    }}
                    src={rightArrow} 
                    alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials