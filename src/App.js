import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the home of Shawn McPeek, developer. Shawn McPeek is a web
          developer, with experience in javascript, html, and css. He also has
          experience with programming, having built many projects in Python.
          Please navigate to the Links page to see websites that Shawn has
          designed and built or Projects to see and download projects he has
          completed. Shawn McPeek has studied the following programs: Zero to
          Mastery: Complete Python Developer in 2023/24 Complete Web Developer
          in 2023/24 Python for Business Data Analytics & Intelligence Mimo:
          Introduction to Programming Using Python Coursera: Crash Course on
          Python
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
