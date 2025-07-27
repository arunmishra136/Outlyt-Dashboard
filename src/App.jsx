import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right"
import MainContent from "./components/Maincontent";

function App() {
  

  return (
    <>
    <div className="p-2 bg-zinc-200">
      <Header></Header>
      <div className="flex">
        <Left></Left>
        <MainContent></MainContent>
        <Right></Right>

      </div>
    </div>
    </>
  )
}

export default App
