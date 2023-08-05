import Main from './Components/Main';

function App() {
  return (
    <main>
      <header className="flex flex-row m-2 align-center p-2 justify-between">
        <h1 className="text-2xl font-bold m-2 p-2 gap-8 justify-start">
          PLI Incentive Calculator
        </h1>
        <nav className="text-end">
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
      <Main/>
    </main>
  );
}

export default App;
