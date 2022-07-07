import React from 'react'
import Loading from './Loading'
import FlatList from './FlatList'

const PublicFlats = ({flats, loading,}) => {
    if(loading){
        return <Loading/>
    }

  return (
    // <div className='row'>
    //   {flats.map((flat)=>(
    //     <div className='col-4'>
    //         <img 
    //         src={"https://m.lemontreehotels.com/CMSWebParts/MobileWebParts/showpropertyGalleryimage.ashx?Hid=491"}
    //         alt=""
    //         height={200}
    //         width={200}/>

    //     </div>
    //   )
    //   )}
    // </div>
    <FlatList rooms={flats}/>
  )
}

export default PublicFlats
