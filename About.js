import React from 'react'
import Button from '../Button/Button'


const About = () => {
    return (
        <>
            <h1 className="heading">About </h1>
              <span className="underline"> </span>
              <Button 
              onClick={()=> console.log('YOU CLICKED ME ')}
              type='button'
              buttonStyle="btn-danger-solid"
              buttonSize="btn-medium">BUY NOW</Button>
              <Button>CLICK ME </Button>
              <Button 
              onClick={()=> console.log('YOU CLICKED ME ')}
              type='button'
              buttonStyle="btn-warning-solid"
              buttonSize="btn-medium">BUY NOW</Button>
               <Button 
              onClick={()=> console.log('YOU CLICKED ME ')}
              type='button'
              buttonStyle="btn-danger-outline"
              buttonSize="btn-large">BUY NOW</Button>
               <Button 
              onClick={()=> console.log('YOU CLICKED ME ')}
              type='button'
              buttonStyle="btn-success-solid"
              buttonSize="btn-medium">BUY NOW</Button>
               <Button 
              onClick={()=> console.log('YOU CLICKED ME ')}
              type='button'
              buttonStyle="btn-warning-outline"
              buttonSize="btn-large">BUY NOW</Button>
        </>
    )
}

export default About
