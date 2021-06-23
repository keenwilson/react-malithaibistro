import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Icon, Button } from 'antd'
import './style.css'

const { Content, Sider } = Layout

const Home = () => {
  return (
    <div>
      <h1 className="heading-title text-center underline-60">
        Mali Thai Bistro
      </h1>

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

            <h1 className="heading-title text-center underline-60">
              Dine-in and take-out
            </h1>
            <p className="dine-in-take-out">
              Our Dining Room is now open. You can also place your carryout
              order online.
            </p>
            <div className="mobile-welcome-options">
              <Button className="mobile-option" size="large">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ordermalithaibistro.com/"
                >
                  Order Online
                </a>
              </Button>
            </div>
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
        <h1 className="heading-title underline-60">Dine-in and take-out</h1>
        <p className="mobile-welcome-text">
          Our Dining Room is now open.
          <br />
          You can also Dine-iplace your carryout order online.
        </p>
        <div className="mobile-welcome-options">
          <Button className="mobile-option" size="large">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ordermalithaibistro.com/"
            >
              Order Online
            </a>
          </Button>
        </div>
        <h1 className="heading-title underline-60">Menu</h1>
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
