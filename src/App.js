import React, { useState, useEffect } from 'react';
import './App.css';
import hamburger from './Photos/Hamburger.jpg';
import pizza from './Photos/Pizza.jpg';
import burrito from './Photos/Burrito.jpg';
import fries from './Photos/Fries&Chicken.jpg';
import dessert from './Photos/Dessert.jpg';
import beverage from './Photos/Beverage.jpg';
import sauce from './Photos/Sauce.jpg';
// import './Photos/Hat.png';
const photos = [hamburger, pizza, burrito, fries, dessert, beverage, sauce];
const sections = ['hamburger', 'pizza', 'burrito', 'fries', 'dessert', 'beverage', 'sauce'];

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function nextPhoto() {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  }

  function prevPhoto() {
    setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
  }

  const getPhotoIndex = (offset) => (currentPhoto + offset + photos.length) % photos.length;

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [indices, setIndices] = useState({
    hamburger: 0,
    cheeseburger: 0,
    mushroom: 0,
    beefBacon: 0,
    pepperoni: 0,
    margherita: 0,
    vegetarian: 0,
    quattroStagioni: 0,
    beefBurrito: 0,
    chickenBurrito: 0,
    blackBeanBurrito: 0,
    veganBurrito: 0,
    standardFries: 0,
    curlyFries: 0,
    chickenTender: 0,
    chickenNuggets: 0,
    chickenWings: 0,
    baklava: 0,
    souffle: 0,
    chocolateIceCream: 0,
    vanillaIceCream: 0,
    pistachioIceCream: 0,
    coke: 0,
    fanta: 0,
    sprite: 0,
    mountainDew: 0,
    drPepper: 0,
    mayonnaise: 0,
    bbq: 0,
    ranch: 0,
    honeyMustard: 0,
    buffalo: 0,
    chipotle: 0,
  });

  const handleAddition = (item) => {
    setIndices((prevIndices) => ({
      ...prevIndices,
      [item]: prevIndices[item] + 1,
    }));
  };

  const handleSubtraction = (item) => {
    setIndices((prevIndices) => ({
      ...prevIndices,
      [item]: prevIndices[item] > 0 ? prevIndices[item] - 1 : 0,
    }));
  };

  const renderMenuItem = (name, label) => (
    <li className='lists'>
      {label}
      <div className='inputs'>
        <button className='minus' onClick={() => handleSubtraction(name)}>-</button>
        <input type='text' readOnly value={indices[name]} />
        <button className='plus' onClick={() => handleAddition(name)}>+</button>
      </div>
    </li>
  );

  return (
    <div className="App" id='top'>
      <nav className={`navbar ${visible ? '' : 'hidden'}`}>
        <h1>Bugrahan's Menu</h1>
        <ul className='nav'>
          <li className='listElements'><a href='#hamburger'>Hamburgers</a></li>
          <li className='listElements'><a href='#pizza'>Pizzas</a></li>
          <li className='listElements'><a href='#burrito'>Burritos</a></li>
          <li className='listElements'><a href='#fries'>Fries & Chicken</a></li>
          <li className='listElements'><a href='#dessert'>Desserts</a></li>
          <li className='listElements'><a href='#beverage'>Beverages</a></li>
          <li className='listElements'><a href='#sauce'>Sauces</a></li>
        </ul>
      </nav>
      <div className='fotoSlider'>
        <button className='prevButton' onClick={prevPhoto}>Prev</button>
        <div>
          <a href={`#${sections[getPhotoIndex(0)]}`}><img className='foto' src={photos[getPhotoIndex(0)]} alt="Menu item" /></a>
          <a href={`#${sections[getPhotoIndex(1)]}`}><img className='foto' src={photos[getPhotoIndex(1)]} alt="Menu item" /></a>
          <a href={`#${sections[getPhotoIndex(2)]}`}><img className='foto' src={photos[getPhotoIndex(2)]} alt="Menu item" /></a>
        </div>
        <button className='nextButton' onClick={nextPhoto}>Next</button>
      </div>
      <div className='menu'>
        <div className='title' id='hamburger'>
          <h1>Hamburgers</h1>
          <ul>
          {renderMenuItem('hamburger', 'Hamburger')}
            {renderMenuItem('cheeseburger', 'Cheeseburger')}
            {renderMenuItem('mushroom', 'Mushroom')}
            {renderMenuItem('beefBacon', 'Beef Bacon')}
          </ul> 
          
        </div>
        <div className='title' id='pizza'>
          <h1>Pizzas</h1>
          <ul>
            {renderMenuItem('pepperoni', 'Pepperoni')}
            {renderMenuItem('margherita', 'Margherita')}
            {renderMenuItem('vegetarian', 'Vegetarian')}
            {renderMenuItem('quattroStagioni', 'Quattro Stagioni')}
          </ul>
        </div>
        <div className='title' id='burrito'>
          <h1>Burritos</h1>
          <ul>
            {renderMenuItem('beefBurrito', 'Beef')}
            {renderMenuItem('chickenBurrito', 'Chicken')}
            {renderMenuItem('blackBeanBurrito', 'Black Bean')}
            {renderMenuItem('veganBurrito', 'Vegan')}
          </ul>
        </div>
        <div className='title' id='fries'>
          <h1>Fries & Chicken</h1>
          <ul>
            {renderMenuItem('standardFries', 'Standard Fries')}
            {renderMenuItem('curlyFries', 'Curly Fries')}
            {renderMenuItem('chickenTender', 'Chicken Tender')}
            {renderMenuItem('chickenNuggets', 'Chicken Nuggets')}
            {renderMenuItem('chickenWings', 'Chicken Wings')}
          </ul>
        </div>
        <div className='title' id='dessert'>
          <h1>Desserts</h1>
          <ul>
            {renderMenuItem('baklava', 'Baklava')}
            {renderMenuItem('souffle', 'Souffle')}
            {renderMenuItem('chocolateIceCream', 'Chocolate Ice Cream')}
            {renderMenuItem('vanillaIceCream', 'Vanilla Ice Cream')}
            {renderMenuItem('pistachioIceCream', 'Pistachio Ice Cream')}
          </ul>
        </div>
        <div className='title' id='beverage'>
          <h1>Beverages</h1>
          <ul>
            {renderMenuItem('coke', 'Coke')}
            {renderMenuItem('fanta', 'Fanta')}
            {renderMenuItem('sprite', 'Sprite')}
            {renderMenuItem('mountainDew', 'Mountain Dew')}
            {renderMenuItem('drPepper', 'Dr. Pepper')}
          </ul>
        </div>
        <div className='title' id='sauce'>
          <h1>Sauces</h1>
          <ul>
            {renderMenuItem('mayonnaise', 'Mayonnaise')}
            {renderMenuItem('bbq', 'BBQ')}
            {renderMenuItem('ranch', 'Ranch')}
            {renderMenuItem('honeyMustard', 'Honey Mustard')}
            {renderMenuItem('buffalo', 'Buffalo')}
            {renderMenuItem('chipotle', 'Chipotle')}
          </ul>
        </div>
      </div>
      <footer>
        <ul>
          <li>Phone: +90 541 5649 262</li>
          <li>E-mail: mbugrahan.telli@gmail.com</li>
          <li>Adress: Blah blah</li>
        </ul>
        <div className='returnToTop'><a href='#top'><img className='logo' src={require('./Photos/Hat.png')} alt='logo'></img>Bugrahan's Menu</a></div>
      </footer>
    </div>
  );
}

export default App;
