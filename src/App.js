import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import LeftSidebar from './Components/Sidebar/Left';
import RightSidebar from './Components/Sidebar/Right';

function onClick() {
  // alert('test')
  document.querySelector(".App-header").classList.toggle('hide-element');
  document.querySelector(".main-header").classList.toggle('hide-element');
  document.querySelector(".main-content").classList.toggle('hide-element');
  document.querySelector(".main-footer").classList.toggle('hide-element');
  document.querySelector(".left-sidebar").classList.toggle('hide-element');
  document.querySelector(".right-sidebar").classList.toggle('hide-element');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first React JS
        </p>
        <a
          className="App-link"
          href="javascript:;"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          Click to Continue
        </a>
      </header>
      <Header />
      <LeftSidebar />
      <Main />
      <RightSidebar />
      <Footer />
    </div>
  );
}

export default App;
