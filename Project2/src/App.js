import logo from './logo.svg';
import './App.css';
import {useNavigate} from "react-router-dom";
import Login from './components/Login';

function App() {
    let navigate = useNavigate();

    if(!sessionStorage.getItem("AUTH_TOKEN")){
       // navigate(`/Login`);
        return(
            <>
                <h1>Please Login</h1>
                <Login/>
            </>
        )
    }
    else{
  return (
    <div className='div1'>
      <br/>
      <section>
            <div className='row'>
                <div className='col-sm-3'>
                    <img className='img1' src="images/b6.jpg" alt="" />
                </div>	
                <div  className='col-sm-3'>
                        <img className='img1' src="images/b1.jpg" alt="" />
                </div>
                <div  className='col-sm-3'>
                        <img className='img1' src="images/b4.jpg" alt="" />
                </div>	
                <div  className='col-sm-3'>
                    <img  className='img1' src="images/b5.jpg" alt="" />
                </div>			  
            </div><br/>
            <div className='row'>
                <div className='col-sm-3'>
                    <h4>Bread</h4>
                    <p>Bread made from whole or sprouted grains contains essential nutrients.</p>
                </div>
                <div className='col-sm-3'>
                    <h4>Buns</h4>
                    <p>Bread made from whole or sprouted grains contains essential nutrients.</p>
                </div>
                <div className='col-sm-3'>
                    <h4>Cookies</h4>
                    <p>Bread made from whole or sprouted grains contains essential nutrients.</p>
                </div>
                <div className='col-sm-3'>
                    <h4>Cakes</h4>
                    <p>Bread made from whole or sprouted grains contains essential nutrients.</p>
                </div>
            </div><br/><br/>
            <div className='row'>
                <div className='col-sm-8' >
                   <h5>Interesting ideas to create new exquisite taste</h5>
                   <p><i>Spices are added to food to make it look more colourful and taste better by increasing the fragrance of the dishes.They may inspire your taste-testing bucket list so that you always have something incredible to look forward to.</i></p>
                </div>
                <div className='col-sm-1'></div>
                <div  className='col-sm-3'>
                    <a className='btn btn-primary ' id="b1"  href="#img">Visit us now !</a>
                </div>			  
            </div><br/>

            
        </section><br/>
        
    </div>
  );
}
}

export default App;
