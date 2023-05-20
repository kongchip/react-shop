import data from '../data.js';
import { useState } from 'react';

function MainPage() {
  let [shoes] = useState(data);
  return (
    <div>
      <div className="main-bg"></div>
      <div className="App">
        <div className="container">
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default MainPage;
