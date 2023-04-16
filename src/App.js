import About from "./components/About";
import Contact from "./components/Contact";
import GithubStats from "./components/githubStats";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skill";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
