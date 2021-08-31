import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast'
class HornedBeasts extends React.Component {

  constructor(props) {
    super(props)
    this.state = { num: 0 }
  }

  vote = () => {
    this.setState({

      num: this.state.num + 1
    })
    
    
  }
  render() {

    return (


        <>
          <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} onClick={this.vote} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                the number of favorites:{this.state.num}
              </Card.Text>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              {/* <Button variant="primary"  onClick={this.props.handleShow}>
        Launch demo modal
      </Button> */}
            </Card.Body>
      </Card>
    </Col>
        </>)
    }



}
        export default HornedBeasts