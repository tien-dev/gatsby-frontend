import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query Category($name: String!) {
    category: strapiCategory(Name: { eq: $name }) {
      Name
      Description
      strapiId
    }
  }
`;

const Category = ({ data }) => {
  const description = data.category.Description;
  const category = data.category.Name;

  return (
    <div>
        <h1>{category}</h1>
        <p>{description}</p>
        {/* <ul>
            {restaurants.map(restaurant => {
            return <li key={restaurant.id}>{restaurant.name}</li>;
            })}
        </ul> */}
    </div>
  );
};

export default Category;