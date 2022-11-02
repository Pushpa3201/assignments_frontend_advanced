import DoctorsDetails from "./DoctorsDetails";

function DoctorsList(){

    let count;
    let doctorsArray = [{name:"Dr Myles. B. Abbott", designation:"Neurosurgeon", rating:3, img:"https://i.pinimg.com/originals/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"},
                        {name:"Dr Fouad. M. Abbas", designation:"Dentist", rating:2,img:"https://i.pinimg.com/originals/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"},
                        {name:"Dr William A. Abdu", designation:"Gynacologist", rating:3,img:"https://i.pinimg.com/originals/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"},
                        {name:"Dr Arthur Reese Abright", designation:"Physician", rating:5,img:"https://i.pinimg.com/originals/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"},
                        {name:"Dr Khalid Abbed", designation:"Neurosurgeon", rating:2,img:"https://th.bing.com/th/id/R.9b154d038252a94c7930fdf6d931cd31?rik=qewY3GRzXvrJhQ&riu=http%3a%2f%2fwww.proheadshots.ca%2fwp-content%2fuploads%2f2016%2f02%2feye-doctor-headshot.jpg&ehk=F7UoccBVEGtzQ90ijnWl2UzhBwaF09oRwRnIf5A7OZM%3d&risl=&pid=ImgRaw&r=0"},
                        {name:"Dr Mark. F. Aaron", designation:"Cardiologist", rating:4,img:"https://media.istockphoto.com/photos/confident-female-doctor-standing-arms-crossed-picture-id460454009?k=6&m=460454009&s=612x612&w=0&h=pCwKHABBCUMAtoEbjuJJyr5ha85u1kfEtzYftWEMols="},
                        {name:" Dr Corrie T.M Anderson", designation:"Dentist", rating:5,img:"https://th.bing.com/th/id/R.a29ace1dd453858794f5e023b291894b?rik=7%2bXOis8I3NdVvA&riu=http%3a%2f%2fwww.proheadshots.ca%2fwp-content%2fuploads%2f2016%2f02%2fdoctors-headshot.jpg&ehk=ZYPzNEkXku6LtOG2Ys6dp6EtD%2ftMKfcQFfFBSmCr4Ig%3d&risl=&pid=ImgRaw&r=0"},
                        {name:" Dr Mona. M. Abaza", designation:"Psychiatrist", rating:1,img:"https://i.pinimg.com/originals/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"}];

                        let result =  doctorsArray.map(item =>  
                            {
                              return <DoctorsDetails Obj={item}  />
                            });
   
                            return (
                               <div> 
                                       {result}
                              </div>
                            );

}
export default DoctorsList;
