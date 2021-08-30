import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
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

        return (<>

        
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

            </Card.Body>
        </Card>
            {/* <h2>{this.props.title}</h2> */}
            {/* <img src={this.props.imageUrl} onClick={this.vote} /> */}
            {/* <h3>the number of favorites:{this.state.num}</h3> */}
            {/* <p>{this.props.description}</p> */}



        </>)
    }



}
export default HornedBeasts