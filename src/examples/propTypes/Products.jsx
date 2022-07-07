import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/01.jpg";

const Product = ({ image, name, price }) => {
    const url = image && image.url;
    return (
        <article className="product">
            <img src={url || defaultImage} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
        </article>
    );
};

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

// set what will be the default prop if the value is missing
Product.defaultProps = {
    name: "default name",
    price: 3.99,
};

export default Product;
