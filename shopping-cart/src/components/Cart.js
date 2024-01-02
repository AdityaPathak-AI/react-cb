import { useSelector } from "react-redux";
import { decrementQty, incrementQTy, removeItem } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.carts.value);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "red" }}>Cart Item</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {selector.map((data, index) => {
              console.log("Data is : " + JSON.stringify(data));
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ borderRadius: "30%" }}
                      src={data.pdata.thumbnail}
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{data.pdata.title}</td>
                  <td>{data.pdata.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(decrementQty(data.pdata.id))}
                    >
                      -
                    </button>{" "}
                    &nbsp;&nbsp;
                    {data.qty}{" "}
                    <button
                      className="btn btn-success"
                      onClick={() => dispatch(incrementQTy(data.pdata.id))}
                    >
                      +
                    </button>
                    &nbsp;&nbsp;
                  </td>
                  <td>{data.pdata.price * data.qty}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeItem(data.pdata.id))}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Cart;
