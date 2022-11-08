import React from 'react'; 
import './about.css'; 
import Login from './Login';


export class About extends React.Component {   
    render(){
      if(!sessionStorage.getItem("AUTH_TOKEN")){
     return(
         <>
             <h1>Please Login</h1>
             <Login/>
         </>
     )
 }

 else {
    return <div >
    <div className='row'>
    <div className='col-sm-4 col'>
        <div className='row-sm-4'>
          <h3>Our Philosophy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, suscipit. Recusandae eius sunt voluptate alias sequi enim. Tenetur libero dolores perferendis</p><br/>
        </div>
        <div className='row-sm-4' >
          <h3>Delicious days</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, suscipit. Recusandae eius sunt voluptate alias sequi enim. Tenetur libero dolores perferendis</p><br/>
        </div>
        <div className='row-sm-4'>
          <h3>Holiday Baking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, suscipit. Recusandae eius sunt voluptate alias sequi enim. Tenetur libero dolores perferendis</p><br/>
        </div>
    </div>
    <div className='col-sm-8 col' >
        <div className='row-sm-6'>
          <h3>WHY DO WE DO IT?</h3>
          <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatem.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi.</li>
          </ol>
        </div>
        <div className='row-sm-6'>
              <h3 >MORE THAN 30 YEARS OF EXPERIENCE</h3>
              <div className='row'>
              <span className='col-sm-3'><img src="https://th.bing.com/th/id/OIP.fKhOPFcaRjaLv1qS02ZETAHaHa?pid=ImgDet&rs=1" /></span>
              <span className='m30 col-sm-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, suscipit. Recusandae eius sunt voluptate alias sequi enim. Tenetur libero dolores perferendis officiis? Nisi saepe reiciendis autem mollitia ab. Facilis, impedit? 
              </span>
              </div>
         </div>
    </div>
    </div>
    <h3 >OUR STAFF</h3>
    <div className='row staff'>   
      
      <div className='col-sm-4  staff' >
        <img  className='staffimg' src="https://th.bing.com/th/id/R.d5a3680270537e9578cd4b9e35d4fff3?rik=X56RtPmocjOkUQ&riu=http%3a%2f%2fwww.middleeasteye.net%2fsites%2fdefault%2ffiles%2fWareef.jpg&ehk=N8qb2vXwE9zkEMTr07Tj9vT1Fb%2fp61wiDNhRJ0pkMbc%3d&risl=&pid=ImgRaw&r=0" />
        <h4>Mark Johnson</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, est.</p><br></br>
      </div>
      <div className='col-sm-4  staff'>
        <img className='staffimg' src="https://th.bing.com/th/id/OIP.UaOGYf-cM8j68mcQwUDMJQAAAA?pid=ImgDet&w=384&h=640&rs=1" />
        <h4>Bradley Grosh</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dignissimos?</p><br></br>
      </div>
      <div className='col-sm-4  staff'>
        <img className='staffimg' src="https://media.istockphoto.com/photos/proud-mature-chef-posing-in-a-kitchen-picture-id510981013?k=6&m=510981013&s=170667a&w=0&h=HElEYGl2odRL2XPHUcPauhM7aDjBGQuRnEgwsV1gzE4=" />
        <h4>Patrick Pool</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vitae.</p><br></br>
      </div>
      </div>
      <div className='row'>
      <div className='col-sm-6  staff'>
        <img className='staffimg' src="https://static8.depositphotos.com/1011643/1067/i/950/depositphotos_10674546-stock-photo-female-chef-presenting-food.jpg" />
        <h4>Jessica Priston</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam.</p><br></br>
      </div>
      <div className='col-sm-6  staff'>
        <img className='staffimg' src="https://th.bing.com/th/id/OIP.J9zMRBp0qb4z4ZGUf47NNgHaLH?pid=ImgDet&w=768&h=1152&rs=1" />
        <h4>Sam Krostain</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam.</p><br></br>
      </div>		  
    </div>
    </div>
 } 
    
  }  
}  
 

export default About;