import StudentData  from '../api/student.json';



function Student(){
    return (
        <>
        {
            StudentData.map((StudentData)=>{
             return    <ul>
            <li key={StudentData.id}>
                 <img src={StudentData.profilePic} alt="" /> 
              <p>Id :  {StudentData.id}</p>  <br />
               <p>Name :  {StudentData.name}</p>  <br />
               
               <p>studentClass :  {StudentData.studentClass}</p>  <br />
              <p>gpa:  {StudentData.gpa}</p>  <br />
              <p>attendance :  {StudentData.attendance}</p>  <br />
              
            </li>
         </ul>
            })
        }
         
        </>
    )
}


export default Student;

