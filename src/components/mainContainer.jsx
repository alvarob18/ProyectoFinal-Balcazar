import React from 'react';
import '../pages/css/main.css';

function MainContainer(props) {
  return (
    <main className="main">
        <div className="text-index">
            <h1 id="h1Tienda">Need for Sports</h1>
            <p>{props.text}</p>
        </div>
    </main>
  );
}

export default MainContainer;
