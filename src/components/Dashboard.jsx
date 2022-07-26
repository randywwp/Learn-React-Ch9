/* eslint-disable */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { 
  CardBody, 
  CardTitle, 
  Col, 
  Row, 
  Container, 
  Card, 
  ListGroup, 
  ListGroupItem 
} from "reactstrap"
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Profile from './dashboard/Profile'
import NavBar from './Navbar'

function Dashboard() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })

  return (
    <Container>
      <NavBar navigations={[]} />
      <Container>
        <Row>
          <Col>
            <Profile user={user} />
          </Col>
          <Col>
            <Card>
             <CardBody>
                <CardTitle tag="h5">
                  Game List
                </CardTitle>
                <ListGroup>
                  <ListGroupItem>
                    <Link to="/game/rock-paper-sisccors">Rock Paper Scissors</Link>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Dashboard
