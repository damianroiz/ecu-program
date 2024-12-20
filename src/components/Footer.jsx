import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSendSharp } from "https://esm.sh/react-icons/io5";
import { HiOutlineMail } from "https://esm.sh/react-icons/hi";
import { PiGarageBold } from "https://esm.sh/react-icons/pi";
import { MdOutlinePhoneAndroid } from "https://esm.sh/react-icons/md";
import styles from "./Footer.module.css";
import Logo from "../ui/Logo";
import Youtube from "../ui/Youtube";
import Instagram from "../ui/Instagram";
import Facebook from "../ui/Facebook";


function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <h2>Quick Links</h2>
      <ul>
        <li><Link to={'/tuning'}>Tuning</Link></li>
        <li><Link to={'/service-and-repairs'}>Service & Repairs</Link></li>
        <li><Link to={'/shop'}>Shop</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>    
    </div>
  )
}

function Subscribe() {
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    email === '' ? setMessage('Please enter your email') :
    setMessage('Thank you for subscribing')
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }
  
  const handleOnChange = (e) => {
    setEmail(e.target.value)
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity('Please enter a valid email address');
  }
}

  return (
    <div className={styles.subscribe}>
    <h2>Subscribe</h2>
    <span>Get the latest about tuning, sales & promos</span>
    <form onSubmit={handleSubmit}>
      <input 
      type="email" 
      value={email}
      name='email' 
      placeholder="enter your email" 
      onChange={handleOnChange}
      required
      title="This is an error message"
      />
      <button type="submit" >
        <span>send</span>
        <IoSendSharp />
      </button>
    </form>
      {message !== '' && (<span className={`${styles.message} ${styles.validMessage}`}>{message}</span>)}
    </div>
  )
}

function Contact() {
  return (
    <div className={styles.contactSection}>
    <h2>Contact</h2>
    <ul>
      <li>
        <HiOutlineMail className={styles.icon} />
        ecuprogram@gmail.com
      </li>
      <li>
        <PiGarageBold className={styles.icon} />
        4527 1St SE, Calgary, AB, Canada T2G 2L2
      </li>
      <li>
        <MdOutlinePhoneAndroid className={styles.icon} />
        +1 (403) - 457 - 3650
      </li>
    </ul>
  </div>
  )
}

function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
    <ul>
      <li>
        <a href="#" target="_blank"><Youtube />
        </a>
      </li>
      <li>
        <a href="#" target="_blank"><Instagram />
        </a>
      </li>
      <li>
        <a href="#" target="_blank"><Facebook />
        </a>
      </li>
    </ul>
  </div>
  )
}

function Copyright() {
  return (
    <div className={styles.copyright}>
    <span>Copyright © 2024 - All Rights Reserved</span>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="">Policy</a>
      </li>
      <li>
        <a href="">Terms & Conditions</a>
      </li>
    </ul>
  </div>
  )
}

function Footer() {
    return ( 
        <footer>
          <div className={styles.footerContainer}>
            <Logo className={styles.logo}/>
            <QuickLinks />
            <Contact />
            <Subscribe />
            <SocialMedia />
          </div>
          <Copyright />
        </footer>
    );
  }

  export default Footer

