import React from 'react'
import HornedBeasts from './HornedBeasts'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
class Main extends React.Component {

    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.props.data.map(element => {


                        return (


                            <HornedBeasts
                                imageUrl={element.image_url}
                                description={element.description}
                                title={element.title}
                                showfun={this.props.showfun}
                                info={this.props.info}
                            />
                        )



                    })}
                </Row></>
        )
    }
}




export default Main