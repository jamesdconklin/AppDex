import React from 'react';

export default ({item}) => {
  let content = <section>'DEFAULT'</section>;

  if (item) {
    content =  (
      <section>
        <h2>{item.name}</h2>
        <p>Happiness: {item.happiness}</p>
        <p>Price: ${item.price}</p>
      </section>
    );
  }
  return content;
};
