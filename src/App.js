import React  from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
class App extends React.Component{
render(){
return( 
<>
<Header/>
<Main/>
<Footer/>
<SelectedBeast />
</>

 )

}


}
export default App;