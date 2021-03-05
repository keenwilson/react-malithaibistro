import React from 'react'
import './style.css'

const NavBar = () => {
  return (
    <aside className="promo-bar sub-header has-background-gradients w-100 d-flex justify-content-center align-items-center">
      <div className="align-middle text-center">
        <figure className="image">
          <img
            className="site-logo centered-and-cropped"
            src="https://i.imgur.com/nq9WN1J.png"
            alt="Mali Thai Bistro logo"
          />
        </figure>
      </div>
    </aside>
  )
}

export default NavBar
