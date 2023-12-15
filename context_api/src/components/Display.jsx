import {context} from "../App"
const Display = () =>
{
     return (
       <div>
         <h1>Display Component Called:</h1>
         <context.Consumer>
            {(data)=><b>{data}</b>}
         </context.Consumer>
       </div>
     );
}
export default Display

