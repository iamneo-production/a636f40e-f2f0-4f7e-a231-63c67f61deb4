import React from 'react'

import './About.css'
import {motion} from 'framer-motion'

const About = () => {
  const transition={duration:3,type:'spring'}
  return (
    <div className='about' id='About'>
        <motion.div 
        initial={{left:'-50%'}}
        whileInView={{left:'15%'}}        
        transition={{duration:1,type:'spring'}}
        className='a-left'>
            <img src="https://assets.weforum.org/sf_account/image/hcp58FIao9mW04d_2-SFQ30rVe2UQkUcRNtjejWil_A.jpg" alt="" srcet="" />
            
        </motion.div>
        <div className='a-right'>
          <motion.div
          initial={{right:'-10%'}}
          whileInView={{right:'0%'}}        
          transition={transition}
           className='a-r'>
            
            <span>About Me</span>
            <span>Developer <span style={{color:'var(--blue)'}}>& Designer</span> </span>
            <span>
            Developed Kismet: Cynthia Breazeal was part of the team that developed Kismet, one of the world's first social robots. Kismet was designed to have a human-like face and could express emotions such as happiness, sadness, and surprise.

Founded Jibo, Inc.: In 2012, Cynthia Breazeal founded Jibo, Inc., a company that developed a breakthrough social robot named Jibo. Jibo was designed to be a personal assistant for the home, with the ability to recognize and respond to voice commands, take pictures, and interact with its surroundings in a natural way.

Recognition by Time magazine: In 2009, Cynthia Breazeal was named one of the 10 most influential women in technology by Time magazine.

Named Young Global Leader: Cynthia Breazeal was recognized by the World Economic Forum as a Young Global Leader, which honors young leaders who have made significant contributions to their respective fields.

Elected as a Fellow of the ACM: In 2017, Cynthia Breazeal was elected as a Fellow of the Association for Computing Machinery (ACM), which is the world's largest educational and scientific computing society.

Professorship at MIT: Cynthia Breazeal is a professor of media arts and sciences at MIT, where she leads the Personal Robots Group and continues to make significant contributions to the field of social robotics.

Authorship of books and research papers: Cynthia Breazeal has authored several books and research papers on social robotics, including the influential book "Designing Sociable Robots" which is widely used in the field.
            </span>
          </motion.div>
          
        </div>
    </div>
  )
}

export default About