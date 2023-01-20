import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
    <Habit completed={5}/>
    <Habit completed={6}/>
    <Habit completed={7}/>
    <Habit completed={8}/>
    </div>
  )
}

export default App
