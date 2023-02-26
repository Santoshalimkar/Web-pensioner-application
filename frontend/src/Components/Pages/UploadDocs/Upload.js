import React,{useState,useEffect} from 'react'
import './Upload.css'
import FileBase from "react-filebase64"


const Upload = ({id}) => {
  const [userdata,setuserData]=useState({})


    const [lifecertificate, setlifecertificate] = useState("")
   
    const lifecertificates=lifecertificate.image

    const uploadhandle = async (e) => {
      e.preventDefault();
  if (!lifecertificates) {
    alert("Please select a file.");
    return;
  }

  
      try {
        const response = await fetch(`http://localhost:8000/Uploadlifecertificate/${id._id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            lifeCertificate:lifecertificates
          })
        });
        const res = await response.json();
        if(res){
          alert("sucessfully uploaded")
        }
      } catch (error) {
        console.log(error);
      }
    
    
    };
    
    
    useEffect(() => {
      if(id){
    uploadhandle(); 
  }
}, [id])


  

    useEffect(() => {
        if(id){
        const fetchdetails = async () => {
          try {
            const response = await fetch(`http://localhost:8000/Get/${id._id}`);
            const data = await response.json();
            setuserData(data.user);
          } catch (error) {
            console.log(error);
          }
        };
        fetchdetails();
    }  
      }, [id]);
    
      




    return (
        <>

            <div className='empbg'>
                <div className='container'>
                    <section class="get-in-touch">
                        <form  onSubmit={uploadhandle} class="contact-form row">
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Upload your Life Certificate</label><br></br>
                                <FileBase
                                 required
                                 multiple={false}
                                 onDone={({base64})=> setlifecertificate({...lifecertificate,image:base64})}/>
                            </div>
                            <div class="d-flex align-items-lg-center mt-3 mt-lg-0 px-3">
                                <button type='submit'  class=" button is-primary  w-full w-lg-auto">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Upload
