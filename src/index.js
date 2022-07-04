// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './styles.css';
// import SimpleReactLightbox from 'simple-react-lightbox'

// ReactDOM.render(
//   <React.StrictMode>
//     <SimpleReactLightbox>
//       <App />
//     </SimpleReactLightbox>
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );


import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import './styles.css';
import SimpleReactLightbox from 'simple-react-lightbox'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>
);