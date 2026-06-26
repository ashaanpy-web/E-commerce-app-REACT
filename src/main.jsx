import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// --- Theatre.js Studio Setup (Ultimate Deep Fix) ---
import * as theatreStudio from '@theatre/studio'

if (import.meta.env.DEV) {
  // Check karein agar nested exports hain
  let studio = theatreStudio;

  if (studio.default && studio.default.initialize) {
    studio = studio.default;
  } else if (studio.studio && studio.studio.initialize) {
    studio = studio.studio;
  }

  // Final check aur execution
  if (typeof studio.initialize === 'function') {
    studio.initialize()
  } else {
    // Agar phir bhi na mile to direct module ke andar se dhoondein
    const directStudio = theatreStudio.default || theatreStudio.studio || theatreStudio;
    if (directStudio && typeof directStudio.initialize === 'function') {
      directStudio.initialize();
    } else {
      console.error("Theatre.js init block matched but structure is unexpected.");
    }
  }
}
// --------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)