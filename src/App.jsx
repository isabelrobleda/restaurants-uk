import "./App.css";
import RestaurantsList from "./components/RestaurantsList";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl p-8">Restaurants Near You</h1>
        <RestaurantsList />
      </div>
    </>
  );
}

export default App;
