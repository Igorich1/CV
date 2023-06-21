import React from 'react'
import './Link.css'

const Link = () => {
  return (
    <div>
      <p>
        <a href="mailto:kravetsofficial2004@gmail.com" class="icon gmail" target="_blank" rel="noreferrer">
          <i class="far fa-envelope"></i> Gmail
        </a>
        <a href="https://www.linkedin.com/in/igor-kravets%F0%9F%87%BA%F0%9F%87%A6-6a57a61b5" class="icon linkedin" target="_blank" rel="noreferrer">
          <i class="fab fa-linkedin"></i> Linkedin
        </a>
        <a href="https://github.com/Igorich1" class="icon github" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://t.me/Igorich1" class="icon telegram" target="_blank" rel="noreferrer">
          <i class="fab fa-telegram"></i> Telegram
        </a>
      </p>


    </div>
  )
}

export default Link;
