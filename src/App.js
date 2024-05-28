import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>

      {/* handleClick ile referans oluşturuyoz ve böylelikle tıklama ile birlikte 
    yukardaki handleClick çalılyor. handlClick yanına parantez koymadık koysaydık 
    uygulama çalışır çalışmaz direkt handlClick çalışırdı ama biz bunu değil 
    tıkklayınca çalışmasını istiyoruz.
    */}    
    </div>
  );
}

export default App;
