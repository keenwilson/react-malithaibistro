import React from 'react'
import './style.css'

const Menu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center underline-60">Menu</h1>
          <h2 className="heading-subtitle text-center">
            Mali Thai Bistro in Lee's Summit, MO
          </h2>
          <div className="text-center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <a 
              href="/MaliThaiBistro_MENU_2025.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ 
                fontSize: '1.2rem', 
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-block',
                marginTop: '1rem'
              }}
            >
              View Our Menu
            </a>
          </div>
          <div className="text-center" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Click the button above to view our complete menu in PDF format
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
