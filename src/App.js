import React from 'react'
import PropTypes from "prop-types"


function Food({name, picture, rating}){
  console.log(name)
  return (
    <div>
      <h2>내가 좋아하는 {name}</h2>
      <img src={picture} alt={name}/>
      <h2>좋아하는 순위 {rating}/5.0</h2>
    </div>
  )
}

Food.propTypes= {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodIlike = [
  {
  id : 1,
  name : "kimchi",
  image : "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg", 
  rating : 5
  },
  {
    id : 2,
    name : "ramen",
    image : "http://i.huffpost.com/gen/1410937/thumbs/o-RAMEN-facebook.jpg#Ramen%202000x1000", 
    rating : 3
  },
  {
    id : 3,
    name : "chicken",
    image : "https://img.sbs.co.kr/newimg/news/20180201/201143595_1280.jpg", 
    rating : 1
  },
]


function App() {
  return (
    <div className="App">
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
