import { useState } from 'react';
import './dogs.css'
const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const [isAdded, setAdded] = useState(false);
    const handleClick=()=>{
        setAdded(true)
    }
    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p>Name: {name}</p>
                <p>Breed: {breed}</p>
            </div>
            <div className="dogs-img-container">
                <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`}/>
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">${price}</div>
            {(isAdded == true)
                ? 
                <button className="dogs-btn-disabled">ADDED</button>
                : 
                <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>
                
            }
           
        </section>
        </>
     );
}
 
export default DogsCard;