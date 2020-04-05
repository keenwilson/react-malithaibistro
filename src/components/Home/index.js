import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Icon, Button } from 'antd'
import './style.css'

const { Content, Sider } = Layout

const Home = () => {
  return (
    <div>
      <h1 className="brand-title">Mali Thai Bistro</h1>
      <div className="special-announcement">
        <Card className="info-annoucemnet">
          <div className="header"> Dear Values Customers and Friends, </div>
          <div className="body">
            Thank you to all of our wonderful customers that made our carry out
            service a success. We appreciate each and everyone of you and the
            love you have shown for our food and our team. We will continue with
            the carry out and curbside service but we will adjust our hours. For
            the time being we will keep our full menu, but may have to change if
            ingredients become unavailable.
            <br />
            <div className="hours">
              Our temporary hours during this crisis will be as follows.
              <br />
              Tuesday - Thursday 11:00 AM - 8:00 PM <br /> Friday - Saturday
              11:00 AM - 9.00 PM <br /> Sunday 12:00 PM - 8.00 PM <br /> Monday
              Closed <br />
              Orders will be taken up to closing time. Please pick up orders
              within 15 minutes after closing.
            </div>
          </div>

          <div className="facebook-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/malithaibistro/"
            >
              Follow our <Icon type="facebook" style={{ fontSize: '18px' }} />{' '}
              for status update
            </a>
          </div>
          <div className="ending">
            Thank you !!! We look forward to see you soon.
            <div className="team-announcement">
              Mali Thai Bistro Team, as of March 30, 2020
            </div>
          </div>
        </Card>
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
                prepared with traditional ingredients. We features a full
                service bar that offers craft beer, cocktails and other
                libations. Mali Thai Bistro caters private events and provides
                carry-out for individuals wanting their meals to go.
              </p>
              <Button className="welcome-options" size="large">
                <a href="tel:+1-816-944-4119">Order Carry-Out / Curbside</a>
              </Button>
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
            prepared with traditional ingredients. We features a full service
            bar that offers craft beer, cocktails and other libations. Mali Thai
            Bistro caters private events and provides carry-out for individuals
            wanting their meals to go.
          </p>

          <div className="mobile-welcome-options">
            <Button className="mobile-option" size="large">
              <a href="tel:+1-816-944-4119">Reserve Your Table</a>
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
    </div>
  )
}

export default Home
