import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Button from './components/Button';
import Search from './components/Search';



function App(){
  return(
    <div>
   <Navbar/>
   <Hero/>
   <div className='row container'>
    <div className="col-md-5"><Button label="Click Me"onClick={()=> alert("clicked me")} />
   <Button label="Submit" onClick={() => alert("Submitted successfully")} />
     </div>
    <div className="col-md-5"> <Search/></div>
   </div>
    
     
          <Footer/>
     
    </div>
  );
}

export default App;
