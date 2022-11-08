import './Login.css';
import {Outlet, useNavigate} from "react-router-dom";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import   axios  from "axios";


function Login(){


    let navigate = useNavigate();

    let [uid, setUid] = useState("");
    let [pwd, setPwd] = useState("");
    let [result, setResult] = useState("");

    var url =  "http://localhost:3500/login";
    var index;

  //let Obj = axios.get(url).data.find(item=>item.username==uid && item.pwd==pwd);
 
function clickSubmit(){
   
     
        axios.get(url).then(response=>{
            index=response.data.findIndex(item=>(item.username==uid && item.pwd==pwd))
            console.log(index);
            if(index == -1){
               setResult("Incorrect details");
            }

            else{
                  sessionStorage.setItem("AUTH_TOKEN", uid);
                 navigate(`/`); 
            }
            
        });   
} 

return(
    <div  className='div2'>
        <form>
            <fieldset>
               <table>
                <tr ><h2 className='display-4'>Sign In</h2></tr><br/>
                <tr>
                    <td>User Name : </td>
                    <td><input type="text" autoFocus onChange={(e)=>setUid(e.target.value)}  required/> </td>
                </tr><br/>
                <tr>
                    <td>Password : </td>
                    <td><input type="password" onChange={(e)=>setPwd(e.target.value)} required/> </td>
                </tr>
                <br/>
                <tr><td colspan="2"><input className="btn btn-primary" type="button" value="Submit" onClick={clickSubmit} /></td></tr><br/>
                <tr>
                    <td><span>{result}</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Don't have account?<span><Link to="/Register"> Sign Up</Link> </span></td>
                </tr>
               </table>
            </fieldset>
        </form>
    </div>
)
    
}
export default Login;