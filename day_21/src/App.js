import logo from './logo.svg';
import './App.css';
import StudentDetails from './StudentsDetails';
import DoctorsList from './DoctersList';

function App() {
  let custid = 101;
  let custname = "Pushpa";
  let city = "Guntur";
  return (
    <div className="App">
      <h1>Working with React--Rendering Scalar Data</h1><hr/>
      Customer Number : {custid}<br/>
      Customer Name : {custname}<br/>
      Customer City : {city}

      <div className="App">
        <h1>Working with React--Rendering Array of Objects</h1><hr/>
        {displayProducts()}
      </div><br/><hr/>
      <h1>Displaying Student Details</h1>
      <StudentDetails/><br/>

      <h3>Student details based on course</h3>
      <StudentDetails course="Angular"/><br/>
      <StudentDetails course="React" /><hr/>
      <DoctorsList/>
    </div>
  );
}

function displayProducts(){
  var products = [{pno:1, pname:"watch", pcat:"Accessories", price:2000, stock:"Available"},
{pno:2, pname:"Gel", pcat:"Accessories", price:200, stock:"Available"},
{pno:3, pname:"Tshirt", pcat:"Clothing", price:500, stock:"Available"},
{pno:4, pname:"smart phone", pcat:"Electornics", price:20000, stock:"Not Available"},
{pno:5, pname:"Jacket", pcat:"Clothing", price:3000, stock:"Available"},
{pno:6, pname:"Earrings", pcat:"Accessories", price:1000, stock:"Not Available"},
{pno:7, pname:"saree", pcat:"Clothing", price:5000, stock:"not Available"}];

let result  =  products.map( item =>  
  {
    return <tr> 
             <td> {item.pno}  </td>  
             <td> {item.pname}  </td>  
             <td> {item.pcat}  </td>  
             <td> {item.price}  </td>  
             <td> {item.stock}  </td>  
        </tr>
  });

return (
  <div> 
  <table border="2"  width="500">
    <tr>
      <th>Product No</th>
      <th>Product Name</th>
      <th>Category</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
    {result}
  </table>
</div>
);
}

export default App;
