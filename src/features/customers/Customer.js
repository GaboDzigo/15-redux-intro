import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  console.log(customer);

  return <h2>👋 Welcome, {customer}⭐</h2>;
}

export default Customer;
