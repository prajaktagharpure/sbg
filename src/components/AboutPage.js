import React from 'react'
import '../styles/about-page.css'

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h1 className='alt-header'>About Sky Betting and Gaming App</h1>
      <p>
        This app exclusively displays Football events showing various markets
        and outcomes associated.
      </p>
    </div>
  )
}

export default AboutPage
