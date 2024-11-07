import Header from "../src/components/Header"
import Main from "../src/components/Main"
import "./styles/components/App.scss"

function App() {
  const dark = false;
  return (
    <div className={`App-${dark? "dark" : "light"}`}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
