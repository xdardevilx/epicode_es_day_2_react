import "./App.css";
import MyFooter from "./components/my-footer.jsx";
import MyNav from "./components/my-nav.jsx";
import Welcome from "./components/welcome.jsx";


import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
