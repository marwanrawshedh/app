import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import data from './component/data.json'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false, title: '',
            url: '',
            desc: '',
            data: data
        }
    }


    showfun = () => {
        this.setState({

            show: true,

        })

    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }


    info = (title, url, desc) => {
        this.setState({
            title: title
            , url: url,
            desc: desc
        })
    }
    change = (event) => {

        if (0 == event.target.value) {

            this.setState({
                data: data
            })
        }

        if (1 == event.target.value) {

            let data0 = data.filter(element => {
                if (element.horns == 1) { return element }
            })
            this.setState({
                data: data0
            })
            console.log(data0 )
        }

        if(2==event.target.value){let data0 = data.filter(element => {
            if (element.horns == 2) { return element }
        })
        this.setState({
            data: data0
        })
        console.log(data0 )}

        if(3==event.target.value){let data0 = data.filter(element => {
                if (element.horns == 3) { return element }
            })
            this.setState({
                data: data0
            })
            console.log(data0 )}

        if(100==event.target.value){let data0 = data.filter(element => {
            if (element.horns == 100) { return element }
        })
        this.setState({
            data: data0
        })
        console.log(data )}

        
    }

    render() {
        return (
            <>
                <Header />
                <FloatingLabel controlId="floatingSelect" label="how many horns">
                    <Form.Select aria-label="Floating label select example" onChange={this.change}>
                        <option>Open this select menu</option>
                        <option value="0">all</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">WOW</option>
                    </Form.Select>
                </FloatingLabel>
                <Main showfun={this.showfun} info={this.info} data={this.state.data} change={this.change}
                />
                <Footer />
                <SelectedBeast
                    show={this.state.show}
                    title={this.state.title}
                    url={this.state.url}
                    desc={this.state.desc}
                    handleClose={this.handleClose}
                />
            </>

        )

    }


}
export default App;
