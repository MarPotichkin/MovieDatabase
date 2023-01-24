import React from 'react'

const CardFavorite = () => {
  return (
    <div className='cardFav'>
      <div className='img'>
      </div>
      <div className='infoMovie'>
        <h5>Title Movie</h5>
        <div className='rankingmovie'>
          <svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="var(--first-color)" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className='pscore'>4.78</p>
        </div>
        <div className='favmovie'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512">
            <path fill="var(--first-color)" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CardFavorite