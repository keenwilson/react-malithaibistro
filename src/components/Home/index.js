import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Icon, Button } from 'antd'
import './style.css'

const { Header, Content, Footer, Sider } = Layout

const Home = () => {
  return (
    <div>
      <h1 className="brand-title">Mali Thai Bistro</h1>
      <div className="special-announcement">
        <Card className="info-annoucemnet">
          <div className="title">
            We care for you...our team...and our community
          </div>
          Thank you for your patronage to Baramee Thai Bistro, and becoming a
          part of our extended Thai Family. The health and safety of our
          wonderful and hardworking team that prepares your meals and serves
          them, and you our wonderful customers, is our top priority. With the
          concern for our entire Thai Bistro family and our community, difficult
          decision’s must be made, and we have decided to close our restaurants
          until April 1st. Please follow us on our Facebook page and website for
          updates as we monitor the situation. We would like your feedback on
          potentially offering a curbside service by next week.
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
          <div className="team-announcement">
            Mali Thai Bistro Team, as of March 17, 2020
          </div>
        </Card>
        <div className="welcome-row">
          <Layout className="welcome-layout">
            <Sider className="site-layout-background" width={300}>
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
      </div>
    </div>
  )
}

export default Home
