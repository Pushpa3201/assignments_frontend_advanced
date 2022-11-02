function StudentDetails(props){

    let value = props.course;
    let  studentsArrays =  [
        {  sid : 10256, sname:"Scott", course: "Java", age : 10 , total:100 },
        {  sid : 10257, sname:"Smith", course: "HTML", age : 20 , total:200 },
        {  sid : 10258, sname:"Sandy", course: "Angular", age : 30 , total:300 },
        {  sid : 10259, sname:"Sam", course: "React", age : 40 , total:400 },
        {  sid : 10256, sname:"Sundar", course: "Angular", age : 10 , total:100 },
        {  sid : 10257, sname:"Sameer", course: "HTML", age : 20 , total:200 },
        {  sid : 10258, sname:"Salman", course: "Angular", age : 30 , total:300 },
        {  sid : 10259, sname:"Shreya", course: "React", age : 40 , total:400 }
    ];
    let filteredData =[];
    if(value==undefined){
      filteredData=studentsArrays;
    }
    else{
         filteredData = studentsArrays.filter(item=>{
            return item.course===value});
        }
        let result = filteredData.map((item, index)=>{
            return(
                <tr key="index" style={{backgroundColor: (index%2==0) ?"green":"yellow"}} > 
                     <td> {item.sid}  </td>  
                     <td> {item.sname}  </td>  
                     <td> {item.course}  </td>  
                     <td> {item.age}  </td>  
                     <td> {item.total}  </td>  
                </tr>
            );
         });
     return(
        <div> 
            <table border="2"  width="500">
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>Total</th>
              </tr>
              {result}
            </table>
      </div>
     );
}
export default StudentDetails;