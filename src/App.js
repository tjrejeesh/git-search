import React from 'react';
import './style/index.scss'
import Header from "./component/Header";
import Footer from "./component/Footer";
import SearchContainer from "./component/SearchContainer";

function App() {
  return (
    <div className="git-search-app">
        <Header/>
        <SearchContainer/>
        <Footer/>
    </div>
  );
}

export default App;
