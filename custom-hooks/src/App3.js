import Custom from "./Custom Hooks/Custom";

const App3 = () =>
{ 
    const data = Custom();
    return<div>
        <h1>
            count : {data.count}<br/>
            count1 : {data.count1}
        </h1>
        <button onClick={data.handleIncrement}>Increment</button> &nbsp;&nbsp;
        <button onClick={data.handleDecrement}>Decrement</button>
    </div>
}
export default App3;