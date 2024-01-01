import { useSelector } from "react-redux";
function Cart() {
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
                      src={data.thumbnail}
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn btn-danger">Remove Item</button>
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
