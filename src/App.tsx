import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {GetMainPage} from "./pages/MainPage";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<GetMainPage/>}/>
        </Routes>
      </>
  )
}

export default App;
