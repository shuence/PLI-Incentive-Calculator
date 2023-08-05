import Main from "./Components/Main";

function App() {
  return (
    <>
      <header className="p-2.5 my-2.5 text-center text-gray-900">
        <nav>
          <h1 className="text-3xl font-bold">PLI Incentive Calculator</h1>
          <ul className="flex gap-8 justify-center text-center">
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
