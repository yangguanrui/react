// console.log('hello');
// import React from "react";
import { createRoot } from 'react-dom/client';
// import App from './app'
// import Ref from './02_ref'
// import App from './03_state'
// import App from './03_state2'
// import App from './04_循环渲染'
// import App from './05_属性props'
// import App from './06_表单的受控和非受控';
import App from './07_子传父'
import './app.css'
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);