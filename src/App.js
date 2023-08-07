import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import storeData from "./components/db.json"

import { useState } from 'react';

function App() {
  const stores = storeData.stores
  const [newStoreData, setNewStoreData] = useState(null);


  // console.log(stores)


  const [sortShop, setSortShop] = useState(stores)

  function filtered(e){
    e.preventDefault()
    const typedValue = e.target.value.toLowerCase()
    const chosenStore =  stores.filter(store =>store.name.toLowerCase().includes(typedValue))

    setSortShop(chosenStore)
}

 

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search data={storeData} filtered={filtered} />
      <NewStoreForm setNewStoreData={setNewStoreData}/>
      <StoreList sortShop = {sortShop} newStoreData={newStoreData} />
    </div>
  );
}

export default App;
