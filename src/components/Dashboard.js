import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import RecentOrders from './RecentOrders'
import { FaShoppingBag } from 'react-icons/fa'
import ActivityChart from './ActivityGraph'
import Feedback from './Feedback'
import Menu from './Menu'

export default function Dashboard() {
  return (
    <Container fluid className='px-0'>
      <TopNavBar/>
      <Row>
         <Col md={1}>
            <SideNavBar/>
        </Col>
        <Col md={11} className='dashboard-container'>
          <h2 className='mt-4'>Dashboard</h2>
          <Row>
            <Col xs={6} md={2}>
            <Card>
              <Card.Body>
              <FaShoppingBag/>
                <Card.Title>Total Orders</Card.Title>
                
                <Card.Text>
                  <div className='d-flex justify-content-between'>
                    <div>75</div>
                    <div>3%</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col md={2} xs={6}>
            <Card>
              <Card.Body>
              <FaShoppingBag/>
                <Card.Title>Total Orders</Card.Title>
                
                <Card.Text>
                  <div className='d-flex justify-content-between'>
                    <div>75</div>
                    <div>3%</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
             </Col>
            <Col md={2} xs={6}>
            <Card>
              <Card.Body>
              <FaShoppingBag/>
                <Card.Title>Total Orders</Card.Title>
                
                <Card.Text>
                  <div className='d-flex justify-content-between'>
                    <div>75</div>
                    <div>3%</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col md={2} xs={6}>
            <Card>
              <Card.Body>
              <FaShoppingBag/>
                <Card.Title>Total Orders</Card.Title>
                
                <Card.Text>
                  <div className='d-flex justify-content-between'>
                    <div>75</div>
                    <div>3%</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col md={4} xs={12}><Card>
              <Card.Body>
                <Card.Title>Net Profit</Card.Title>
                <div>
                  <div className='fs-2 '>
                    <strong>$3560</strong></div>
                </div>
              </Card.Body>
            </Card></Col>
          </Row>
          <Row>
            <Col md={8}><ActivityChart/></Col>
            <Col md={4}><Menu/></Col>
          </Row>
          <Row>
            <Col md={8}><RecentOrders/></Col>
            <Col md={4}><Feedback/></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
