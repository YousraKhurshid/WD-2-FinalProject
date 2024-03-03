import React, { useState, useEffect } from 'react';

export default function ImageSection({ images }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setImg(images[0]);
    }
  }, [images]);

  const changeImage = (index) => {
    setImg(images[index])
  }
    return (
    <>
        <div className='d-flex align-items-center'>
       
      <div className='col-md-3 m-2'>
        {
          images?.map((val,key)=> 
            <div className={img == images[key] ? ('col-md-3 m-2') : (null)} onClick={()=>changeImage(key)} key= {key}>
             <img style={{width:'8vw', height:'16vh', overflow: 'hidden', transition: 'transform 0.3s', border: 'none', margin: '0.5rem'}} src={ val } alt={`img-${key}`}/>
            </div>
          )
        }
          </div>
          <div className="container w-75">
        <img src={img} alt="" className="img-fluid m-5 rounded-1" style={{width: '40rem', height:'auto'}} />
         
      </div>
          
        </div>
    </>
  )
}


{/* <div className={img == images[key] ? ('border border-dark rounded-circle p-2') : (null)} onClick={()=>changeImage(key)} key= {key}> */}

                                
    // style={{width:'15vw', height:'15vh'}} className='rounded-circle img-fluid'