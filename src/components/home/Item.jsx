import React from "react";

const Item = (props) => {
    const name = props.name;
    const desc = props.desc;
    const img = props.img;
    const price = props.price;
    const rating = props.rating;

    return (
        <div className="flex flex-col shadow-md p-6 w-96 rounded-md">
            <img src={img}></img>
            <p>{price}</p>
            <p>{name}</p>
            <p>{desc}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Item;
