import React from 'react'
import HornedBeasts from './HornedBeasts'
import SelectedBeast from './SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.json'
import Row from 'react-bootstrap/Row'
class Main extends React.Component {

    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {data.map(element => {


                    return (


                        <HornedBeasts
                            imageUrl={element.image_url}
                            description={element.pdescription}
                            title={element.title}

                        />
                    )
   
    
    
                })}
            </Row></>
        )
    }
}




export default Main