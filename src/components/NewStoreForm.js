import React, { useState } from "react"

function NewStoreForm({setNewStoreData}) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [season, setSeason] = useState('')
    const [episode, setEpisode] = useState('')
    

    function handleSubmit (e){
        e.preventDefault()
        const submitDetails = {name, image, season, episode}

        fetch ('http://localhost:8085/stores',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(submitDetails)
        }).then(response  => response.json())
        .then(data => {
            setNewStoreData(
                <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>
                       <img src = {data.image}/>
                    </td>
                    <td>{data.season}</td>
                    <td>{data.episode}</td>
                </tr>

            )  
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" id="image" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} />
            <input value={season} type="number" id="season" placeholder="Season" step="1" onChange={(e)=>setSeason(e.target.value)}/>
            <input value = {episode} type="number" id="episode" placeholder="Episode" step="1" onChange={(e)=>setEpisode(e.target.value)}/>
            <button type="submit">Add Store</button>
        </form>
        </>
    )
}

export default NewStoreForm;