import React from 'react'

export default function Footer() {
  return (
    <footer className='footer bg-primary'>
      <a className='bg-light rounded p-3 d-block mx-5' href='https://www.linkedin.com/in/samdunnewebdev/' target='blank' ><img src='/LI-In-Bug.png' alt='LinkedIn Logo' className='iconLink'></img></a>
      <div><h6 className='text-light text-center'>Sam Dunne</h6>
        <a href="/2022-07-12 Sam Dunne WebDev Resume.pdf" download="Sam Dunne Resume" className='d-block p-2 text-primary bg-light rounded'>Download Resume</a>
      </div>

      <a className='bg-light rounded p-3 d-block mx-5' href='https://github.com/Sam-Dunne/learning-redux' target='blank' ><img src='/GitHub-Mark-120px-plus.png' alt='GitHub Logo' className='iconLink'></img></a>
    </footer>
  )
}
