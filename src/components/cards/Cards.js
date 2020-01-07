import React from 'react';

export default function Cards({ title, category }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{category}</p>
    </div>
  );
}
