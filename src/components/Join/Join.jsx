import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p5tlm1k', 'template_wsyrn4v', form.current, 'wQBBtuuFNHJD-z-wV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='join' id='join-us'>
        <div className='join-l'>
            <hr />
            <div>
                <span className='stroke-text'>ready to </span>
                <span>level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className='join-r'>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='Enter your Email Address...'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join