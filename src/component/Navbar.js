import React from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from '../data';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>Logo</h3>
          <button className='nav-toggle' >
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            {
              links.map((item) => {
                const { id, text, url } = item;
                return (
                  <li id={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar