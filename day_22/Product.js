import {useState}  from 'react';
function Product(){

    let [name, setName]  = useState("");
    let [price, setPrice]  = useState(0);
    let [qty, setQty]  = useState(0);
    let [result, setResult]  = useState("");

   // let [uid, setUid] = useState("");

  /*  function inputNameChange(event)
    {
        setName(event.target.value);
    }

    function inputPriceChange(event)
    {
        setPrice(event.target.value);   
    }
    function inputQtyChange(event)
    {
        setQty(event.target.value);   
    } */


    let getTotal  = function()
    {
        let value = 0;
        value = price*qty;

        setResult("Item Name : "+name + "  -  Amount to be paid : "+ value);
    };

    return (
        <>
            <h3>Working with Multiple State-Product Page</h3>
            <hr/>

            <fieldset>
                <legend>Product Page</legend>
                <label>Product Name  : </label> 
                <input type="text"  onChange={e => setName(e.target.value)}  />
                <br/><br/><br/>
              <label> Unit Price : </label>
                <input type="text"  onChange={e => setPrice(e.target.value)}  />
                <br/><br/><br/>
                <label>Quantity : </label>
                <input type="text"  onChange={e => setQty(e.target.value)}  />
                <br/><br/><br/>
                <input type="button"  value="Get Total"  onClick={getTotal}  />
                <hr/>
                <p style={{color:"blue", fontWeight:"bold"}} >{result}</p>
            </fieldset>
        </>
    );
}
export default Product;