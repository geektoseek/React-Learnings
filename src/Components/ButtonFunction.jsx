import React from 'react'

const ButtonFunction = () => {
  // const onhitBtn = () => console.log(Math.round(Math.random() * 10));

  const copyhandler = () => {
    console.log("Stop Stealing Content ");

  }
  return (
    <div>



      <p onCopy={copyhandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel ad nesciunt placeat porro eius quis voluptatem expedita illum maiores!</p>
      {/* <button onClick={onhitBtn}>Click Me</button> */}

    </div>
  )
}

export default ButtonFunction