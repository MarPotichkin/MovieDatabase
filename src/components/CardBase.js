import React from 'react';
import "../styles/cardBase.css"

const CardBase = () => {
  return (
    <div className='cardBase'>
      <div className='openInfoCard'></div>
      <div className='cardInfo'>
        <h5>Title Movie</h5>
        <p>Enim aliquip culpa voluptate esse elit sit quis eu. Consectetur aute aliquip minim dolor tempor minim aliquip excepteur sunt. Nulla veniam ea tempor anim nostrud do mollit sunt sit. Dolor Lorem enim consequat est nostrud occaecat quis aute ullamco voluptate duis sint. Elit dolore cillum reprehenderit pariatur. Anim tempor fugiat nisi adipisicing veniam voluptate ad elit ipsum ut ut anim.
          Minim Lorem pariatur laborum deserunt minim eu nostrud minim. Pariatur minim veniam cillum enim id eiusmod veniam nisi. Occaecat excepteur cillum dolore reprehenderit anim.</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
          <path fill="var(--ci-primary-color, currentColor)" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary" />
        </svg>
      </div>
    </div>
  )
}

export default CardBase