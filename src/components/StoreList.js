import React from "react"
import Store from "./Store"
import storeData from "./db.json"

function StoreList({newStoreData, sortShop}) {
    return(
        <>
         <table>
            <tbody>
                <tr>
                    <th className="row-name">Name</th>
                    <th> Image </th>
                    <th>Season</th>
                    <th>Episode</th>
                </tr>
                {sortShop.map((store) => (
                <tr key={store.id}>
                <td>{store.name}</td>
                <td>
                    <img src = {store.image} alt={store.name}/>
                </td>
                <td>{store.season}</td>
                <td>{store.episode}</td>
                </tr>
                ))}
                {newStoreData}
            </tbody>
        </table> 
        </>
    )}

export default StoreList;
             
        