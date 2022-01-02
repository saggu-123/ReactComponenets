import React from 'react'
import Tabs from '../Tabs/Tabs'
import Places from '../Fetchdata/Places'
import UplaodFile from '../UPLOADFILE/UplaodFile'
const Gallery = () => {
    return (
        <>
            <h1 className="heading">Gallery </h1>
              <span className="underline"> </span>
          <Places></Places>
          <Tabs></Tabs>
          <UplaodFile></UplaodFile>
        </>
    )
}

export default Gallery
