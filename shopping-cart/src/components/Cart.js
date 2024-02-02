import { useSelector } from "react-redux";
import {
  decrementQty,
  incrementQTy,
  removeItem,
  emptyQty,
  clearData,
} from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.carts.value);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    selector.forEach((data) => {
      totalQuantity += data.qty;
    });
    return totalQuantity;
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    selector.forEach((data) => {
      totalAmount += data.pdata.price * data.qty;
    });
    return totalAmount;
  };

  const totalQuantity = useSelector((state) => getTotalQuantity());
  const totalAmount = useSelector((state) => getTotalAmount());

  return (
    <div className="container">
      <button
        className="btn btn-danger"
        style={{ float: "right" }}
        onClick={() => dispatch(clearData())}
      >
        Empty Cart
      </button>
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
              <th>Reset</th>
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
                      alt="lol"
                    />
                  </td>
                  <td>{data.pdata.title}</td>
                  <td>$ {data.pdata.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(decrementQty(data.pdata.id))}
                    >
                      -
                    </button>
                    &nbsp;&nbsp;
                    {data.qty}
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-success"
                      onClick={() => dispatch(incrementQTy(data.pdata.id))}
                    >
                      +
                    </button>
                    &nbsp;&nbsp;
                  </td>
                  <td>$ {data.pdata.price * data.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeItem(data.pdata.id))}
                    >
                      Remove Item
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => dispatch(emptyQty(data.pdata.id))}
                    >
                      Reset
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <h1>Total Quantity: {totalQuantity}</h1>
          <h1>Total Amount: $ {totalAmount}</h1>
          <button className="btn btn-dark">
            <Link to="/login">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
