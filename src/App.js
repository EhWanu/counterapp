import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks'

function App() {
  return (
    <>
    Counter
    <Counter initialCount={0} />
    CounterHooks
    <CounterHooks initialCount={0} />
    </>
  )
}

export default App;
