/* eslint-disable */
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, Row } from "reactstrap"

function Home () {
  return (
      <Row className="justify-content-center  align-items-center">
        <Card>
           <CardBody>
              <CardTitle tag="h5">
                Home
              </CardTitle>
              <Link to="/login">login</Link>
              <br></br>
              <Link to="/register">register</Link>
          </CardBody>
        </Card>
      </Row>
  )
}

export default Home
