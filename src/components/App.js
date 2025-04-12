import React, { useState } from "react"; //add useSate
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  //add state variable
  const [isDarkMode, setIsDarkMode] = useState(false)

  //use it to set the class dynamically
  const appClass = isDarkMode ? "App dark" : "App light"

  //handle the button click
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode) //toggle the value
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
