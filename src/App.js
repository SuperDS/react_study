
import Popup from './componets/Popup';
import Home from './componets/Home';

import {useState} from'react';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>Recat Popups</h1>

        <br></br>

        <button className="w_button" onClick={() => setButtonPopup(true)}>Profile</button>

        {/* <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80"></img> */}
      </main>
      <Home>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>
        </Home>
    </div>
  );
}

export default App;
