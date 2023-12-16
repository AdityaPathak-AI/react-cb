import Show from "./components/Show";
import User from "./components/User";

const App = (props) =>
{ 
  const result = props.data
    return (
      <div>
        <h1>Main Component Called</h1>
        {result ? <User /> : <Show />}
        <h2>😐</h2>
      </div>
    );
}
export default App;