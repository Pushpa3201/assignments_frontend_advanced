import React from 'react';
import './contact.css';
import Login from './Login';
import { render } from 'react-dom';

export class Contact extends React.Component {  

 
    // navigate(`/Login`);
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
    <div  id="showcase" >
        <div className="showcase-content">
            <h1>We'd love to hear from you</h1>
            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sequi vero excepturi eius voluptatum debitis, provident quae, enim ut reiciendis sit delectus assumenda, reprehenderit totam ullam nemo et harum quaerat.</p> 
            <a href="#contact" className="btn btn-primary">Leave us a message</a>
            <a href="#branches" className="btn btn-primary">Our Branches</a>
        </div>
    </div>
    


    <div>
    <div >
        <form >
        <h3>LEAVE US A MESSAGE</h3>
        <label className="msg">Name<span className="req">*</span></label><br/>
        <input type="text" className="msg" id="kame" size="50" name="name" required/>
        <br/><br/>
        <label className="msg">Email<span className="req">*</span></label><br/>
        <input type="email" className="msg" id="kemail"  size="50" name="email"  required/><br/><br/>
        <label className="msg">Subject</label><br/>
        <input type="text" className="msg" id="subject" size="50" name="text"/><br/><br/>
        <label className="msg">Your Message</label><br/>
        <textarea className="msg" id="message" rows="6" cols="70" name="message"></textarea>
        <br/><br/>
        <input  type="submit" value="submit" className="btn msg btn-primary border rounded" />
        </form>
   </div>
   <div>
    <h3 className="t1">FAQ</h3>

   <div id="accordion">
    
    <h4>How to order online?</h4>
    <div>
      <p>
      Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
      ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
      amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
      odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
      </p>
    </div>
    <h4>How much is the discount?</h4>
    <div>
      <p>
      Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
      purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
      velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
      suscipit faucibus urna.
      </p>
    </div>
    <h4>What if I don't like what I purchased?</h4>
    <div>
      <p>
      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
      Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
      ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
      lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
      </p>
      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
    </div>
    <h4>I haven't received my refund!</h4>
    <div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae iste qui, facilis aspernatur commodi asperiores dicta enim tempora eligendi hic! Laborum accusantium tempora consequuntur quidem corrupti delectus quasi voluptate?
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate exercitationem eos alias commodi, nam odit nihil minus amet. Quod, odit illum atque laboriosam perferendis at ut libero, itaque laborum quaerat eum magni cupiditate inventore praesentium quasi facere beatae amet.
      </p>
    </div>
    <h4>Are you dog-friendly?</h4>
    <div>
      <p>
      Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus no
      quam. In suscipit faucibus urna.
      </p>
    </div>
    <h4>Can I reserve a table for brunch?</h4>
    <div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis facilis aut incidunt? Eius esse enim officiis vero recusandae eos iure. Voluptate laboriosam expedita illo animi distinctio. Vitae aperiam sapiente molestiae officia doloribus quo dignissimos sequi incidunt rerum exercitationem. Similique omnis eaque repellat nisi exercitationem commodi beatae soluta id atque!
      </p>
    </div>
    
  </div>
</div>

</div>

   


   <div  className='row'>
    <h3 className="t1">Contact Us Directly</h3>
    <p className="msg msg1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro illo beatae saepe, voluptatibus provident.</p>
    <p className="msg msg1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vel cupiditate voluptas fugiat reiciendis ullam recusandae et, possimus perferendis, iure quae molestias ratione voluptatibus quaerat qui, eveniet cumque impedit illo corrupti? </p>
    <p className="msg msg1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum corrupti possimus dolor error, nam inventore laboriosam laborum maxime sapiente, magnam reiciendis hic amet nisi eum obcaecati alias eveniet, soluta blanditiis doloremque perspiciatis beatae ex. Perferendis officia </p>
    <p className="msg msg1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati inventore architecto, repellendus sequi non aspernatur fuga. Laboriosam, quis ad quaerat qui, eveniet cumque impedit illo corrupti?</p>
    <p className="msg msg1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquam nobis voluptatum, ullam accusantium quibusdam nihil</p>
    <p className="msg  msg1 details"><i className="bi bi-telephone-fill"></i>&nbsp;+91-1234567891</p>
    <p className="msg  msg1 details"><i className="bi bi-envelope-fill">&nbsp;team3@project.com</i></p>
    <p className="msg msg1 details"><i className="bi bi-geo-alt-fill"></i>&nbsp;Deloitte, Gachibowli, Hyderabad, India</p>
   </div>

   <div  className='row'>
    <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" height="450px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=623&amp;height=548&amp;hl=en&amp;q=deloitte gachibowli&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/">Piratebay</a></div></div>
   </div>






<h2  id="branches"><i className="bi bi-building"></i>Our Branches</h2>
<div  >
<div className='row'>
    <div  className="s2 col-sm-3 ">
        <h4>Main Branch</h4>
        <p>B-2/283 Sec-6 Rohini New Delhi 110085</p>
    </div>
    <div  className="s2 col-sm-3">
        <h4>Mumbai</h4>
        <p>Pripra,Daraundha Near Police Station Siwan 841233</p>
    </div>
    <div  className="s2 col-sm-3">
        <h4>Kolkata</h4>
        <p>Block Colony Sareya Ward N0-5 Gopaplganj 676428</p>
    </div>
    <div  className="s2 col-sm-3">
        <h4>Hyderabad</h4>
        <p>Deloitte towers Gachibowli Mindspace road 500021</p>
    </div>
</div>

<div  className='row'>
  <div  className="s2 col-sm-3">
      <h4>Banglore</h4>
      <p>B-2/283 Sec-6 Rohini New Delhi 110085</p>
  </div>
  <div  className="s2 col-sm-3">
      <h4>Patna</h4>
      <p>Pripra,Daraundha Near Police Station Siwan 841233</p>
  </div>
  <div  className="s2 col-sm-3">
      <h4>Chennai</h4>
      <p>Block Colony Sareya Ward N0-5 Gopaplganj 676428</p>
  </div>
  <div  className="s2 col-sm-3">
      <h4>Chandigarh</h4>
      <p>B-2/283 Sec-6 Rohini New Delhi 110085</p>
  </div>
</div>

<div  className='row'>
<div  className="s2 col-sm-3">
    <h4>Banglore</h4>
    <p>B-2/283 Sec-6 Rohini New Delhi 110085</p>
</div>
<div  className="s2 col-sm-3">
    <h4>Patna</h4>
    <p>Pripra,Daraundha Near Police Station Siwan 841233</p>
</div>
<div  className="s2 col-sm-3">
    <h4>Chennai</h4>
    <p>Block Colony Sareya Ward N0-5 Gopaplganj 676428</p>
</div>
<div  className="s2 col-sm-3">
    <h4>Chandigarh</h4>
    <p>B-2/283 Sec-6 Rohini New Delhi 110085</p>
</div>
</div>
</div>
    </div> 
  } 
} 
}

export default Contact;