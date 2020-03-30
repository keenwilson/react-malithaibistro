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
            Thank you for being patient with us during these difficult times.
            Thank you to everyone for all of the online requests for our food.
            After two weeks of confinement, our staff feel comfortable to get
            back to doing what they do best and they are ready to cook delicious
            thai food for you. We wish we could visit with you in the dining
            room and look forward to doing that soon, but for now, it looks like
            carry out only. Starting Tuesday, March 31 we will be open for
            curbside and carry out service only.
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
                <a href="tel:+1-816-944-4119">Reserve Your Table</a>
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
