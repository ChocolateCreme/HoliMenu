import Header from "./components/Header";
import About from "./components/About";
import "./App.css";
import Tandoor from "./components/Tandoor";
import Paratha from "./components/Paratha";
import WholeWheatBreads from "./components/WholeWheatBreads";
import Naan from "./components/Naan";
import SideOrder from "./components/SideOrder";
import Dessert from "./components/Dessert";
import Beverages from "./components/Beverages";
import SoupsSalads from "./components/SoupsandSalads";
import Appetizers from "./components/Appetizers";
import Chaats from "./components/Chaats";
import Dosa from "./components/Dosa";
import Vegetarian from "./components/Vegetarian";
import Chicken from "./components/Chicken";
import LambGoat from "./components/LambandGoat";
import ShrimpFish from "./components/ShrimpandFish";
import ChefSpecial from "./components/ChefSpecial";
import IndoChinese from "./components/IndoChinese";
import Biryani from "./components/Biryani";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const categories = [
    { id: 1, title: "Tandoor: ", description: "Marinated with yogurt and chef's choice of spices baked in tandoor, served on a bed of onion and pepper, tikka masala sauce and a plain naan."},
    { id: 2, title: "Paratha: ", description: "Whole wheat bread griddled with butter."},
    { id: 3, title: "Whole Wheat Breads: ", description: "Delicious bread that goes well along with any curry."},
    { id: 4, title: "Naan: ", description: "Leavened bread baked in tandoor."},
    { id: 5, title: "Side Orders: ", description: "Small sides to finish off any meal!"},
    { id: 6, title: "Dessert: ", description: "Finger-licking good desserts that will have you licking the plate once you're done!"},
    { id: 7, title: "Beverages: ", description: "Taste a sip of India with our awesome beverages."},
    { id: 8, title: "Soups and Salads: ", description: "Classic soup and salads, couldn't have a menu without them."},
    { id: 9, title: "Appetizers: ", description: "You can't off a meal without an appetizer. In each bite you can taste the thought and effort of the foods of India."},
    { id: 10, title: "Chaats: ", description: "Chaats are savory appetizers."},
    { id: 11, title: "Dosa: ", description: "A thin crispy crepe made with rice and lentils served with coconut chutney and sambhar (lentil and vegetable stew)."},
    { id: 12, title: "Vegetarian: ", description: "We are in fact vegetarian friendly! If you are too, try these classics from our vegetarian menu."},
    { id: 13, title: "Chicken: ", description: "Are you a chicken fanatic? Try these meals!"},
    { id: 14, title: "Lamb and Goat: ", description: "These days, it's hard to find a menu that serves lamb and goat. At Holi, you're in the right place if you're craving them."},
    { id: 15, title: "Shrimp and Fish: ", description: "Love seafood? We've got you covered!"},
    { id: 16, title: "Chef Special: ", description: "Limited edition meals. Try them before they're gone!"},
    { id: 17, title: "Indo Chinese: ", description: "Want to try something besides Indian food? You've come to right place!"},
    { id: 18, title: "Biryani: ", description: "Basmati rice cooked with aromatic spices & nuts. Served with raita and your choice."},
  ];

  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(categories =>
    categories.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <Header/>
        <About/>
      <div className="Coral">
        <Tandoor/>
        <Paratha/>
        <WholeWheatBreads/>
        <Naan/>
        <SideOrder/>
        <Dessert/>
        <Beverages/>
        <SoupsSalads/>
        <Appetizers/>
        <Chaats/>
        <Dosa/>
        <Vegetarian/>
        <Chicken/>
        <LambGoat/>
        <ShrimpFish/>
        <ChefSpecial/>
        <IndoChinese/>
        <Biryani/>
      </div>
      <div className="filter">
        <h4>Not sure where to start or what to order? Don't worry! Search up any food category below to learn more!</h4>
        <input
          type="text"
          placeholder="Search a Category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search">
          {filteredCategories.length > 0? (
            filteredCategories.map(categories => (
              <div key={categories.id} className="categories">
                {categories.title}
                {categories.description}
              </div>
            ))
          ) : (
            <p>Sorry! Couldn't find the category you were looking for.</p>
          )}
      </div>
    </div>
      <div className="Navigation">
        <Navbar/>
      </div>
    </>
  );
};

export default App;