import React, { useEffect } from 'react';

const SayName = ({name}) => {
  useEffect(() => {
    console.log('SayName : I\'m mounting !')
  }, [])
  
  useEffect(() => {
    return () => console.log('SayName : I\'m unmounting ! bye !')
  }, [])
  
  return <h2>Hello {name} !</h2>;
};

export default SayName;