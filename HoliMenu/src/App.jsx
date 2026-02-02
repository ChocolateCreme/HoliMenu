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

function App() {
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
    </>
  );
};

export default App;