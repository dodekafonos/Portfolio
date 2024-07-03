import React from 'react';

// Define the props interface
interface CardProps {
  image: string;
  name: string;
  description: string;
  url: string;
}

// Use the props within the component
const Card: React.FC<CardProps> = ({ image, name, description, url }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <a target="_blank" rel="noopener noreferrer" href={url}>Check it out!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
