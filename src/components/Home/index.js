import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Icon, Button } from 'antd'
import './style.css'

const { Content, Sider } = Layout

const Home = () => {
  return (
    <div>
      <h1 className="brand-title">Mali Thai Bistro</h1>

      <div className="welcome-row">
        <Layout className="welcome-layout">
          <Sider className="welcome-sider" width={300}>
            <img
              className="welcome"
              src="https://i.imgur.com/9ll2yb9.jpg"
              alt="Thai restaurant in Kansas City area"
            />
          </Sider>
          <Content className="welcome-content">
            <p>
              Founded in 2015, Mali Thai Bistro is family-owned restaurant and
              offers a variety of Thai dishes from several regions of Thailand
              prepared with traditional ingredients. We features a full service
              bar that offers craft beer, cocktails and other libations. Mali
              Thai Bistro caters private events and provides carry-out for
              individuals wanting their meals to go.
            </p>

            <Button className="welcome-options" size="large">
              <Link className="footer__link" to="/menu">
                See Our Menu
              </Link>
            </Button>
          </Content>
        </Layout>
      </div>
      <div className="mobile-welcome-content">
        <img
          className="mobile-welcome-pic"
          src="https://i.imgur.com/9ll2yb9.jpg"
          alt="Thai restaurant in Kansas City area"
        />
        <p className="mobile-welcome-text">
          Founded in 2015, Mali Thai Bistro is family-owned restaurant and
          offers a variety of Thai dishes from several regions of Thailand
          prepared with traditional ingredients. We features a full service bar
          that offers craft beer, cocktails and other libations. Mali Thai
          Bistro caters private events and provides carry-out for individuals
          wanting their meals to go.
        </p>

        <div className="mobile-welcome-options">
          <Button className="mobile-option" size="large">
            <a href="tel:+1-816-944-4119">Order Carry Out / Curbside Service</a>
          </Button>
        </div>
        <div className="mobile-welcome-options">
          <Button className="mobile-option" size="large">
            <Link className="footer__link" to="/menu">
              See Our Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
