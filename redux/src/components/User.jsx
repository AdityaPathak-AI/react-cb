import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserName, removeUserName } from "../redux/Slice";

const User = () => {
  var name = useRef();
  const dispatch = useDispatch();

  var addName = () => {
    var nm = name.current.value;
    dispatch(addUserName(nm));
  };
  var removeName = () => {
    var nm = name.current.value;
    dispatch(removeUserName(nm));
  };

  return (
    <diuv>
      <h1>User Component Called</h1>
      <input type="text" placeholder="Enter Name" ref={name} />
      &nbsp;&nbsp;
      <button onClick={addName}>Add Name</button>
      &nbsp;&nbsp;
      <button onClick={removeName}>Remove Name</button>
    </diuv>
  );
};
export default User;
