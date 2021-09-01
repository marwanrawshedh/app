import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import data from './component/data.json'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show:false,title:'',
            url:'',
            desc:'',
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


    render() {
        return (
            <>
                <Header />
                <Main showfun={this.showfun} info={this.info} data={data}
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
