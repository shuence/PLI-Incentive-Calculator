import Main from "./Components/Main";

function App() {


  const toggleMenu = () => {
    console.log("Menu Clicked")
  }

  return (
    <>
      <header className="p-2.5 my-2.5 text-center text-xl font-bold text-gray-900">
        <nav>
          <h1>PLI Incentive Calculator</h1>
          <div className="hamburger" onclick={toggleMenu()}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="flex gap-8 mr-12 pr-12 text-end">
            <li className="m-2 p-2">
              <a href="/">Home</a>
            </li>
            <li className="m-2  p-2">
              <a href="/about">About</a>
            </li>
            <li className="m-2 p-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Main />
    </>
  );
}

export default App;
