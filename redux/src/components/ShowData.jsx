import { useSelector } from "react-redux";

const ShowData = () =>
{
    const data = useSelector(state => state.stud.value)
    return <div>
        <h1>Show Component Called</h1>
        {data.map(content => <b>{content} &nbsp;&nbsp;</b>)}
    </div>
}
export default ShowData;