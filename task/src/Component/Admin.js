import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../redux/counterSlice";

const Admin = () => {
  const data = [
    {
      id: 1,
      title: "Laptop Backpack",
      price: 109.95,
      description: "A cool laptop backpack",
    },
    {
      id: 2,
      title: "Casual T-Shirt for Men",
      price: 22.3,
      description: "Slim-fitting style, t-shoty for men",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for spring, autumn, or winter.",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "An aweome shirt for men",
    },
    {
      id: 5,
      title: "Women's Gold & Silver Bracelet",
      price: 695,
      description: "A very cool bracelet.",
    },
  ];
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart.cart);
  console.log("cart", cartitem);
  const handelcart = (item) => {
    console.log("item", item);
    dispatch(addCart(item));
  };
  const handelremove = (item) => {
    console.log(item);

    dispatch(removeCart(item));
  };
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className="p-5">
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {item.price}
                </p>
                <button
                  type="button"
                  onClick={() => handelcart(item.title)}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </a>
            </div>
          );
        })}
      </div>
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">cart item</h1>

      {cartitem.length === 0 ? (
        <h1>No item in cart</h1>
      ) : (
        cartitem.map((item) => {
          return (
            <div key={item.id} className="p-5">
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item}
                </h5>

                <button
                  type="button"
                  onClick={() => handelremove(item)}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  remove
                </button>
              </a>
            </div>
          );
        })
      )}
    </>
  );
};
export default Admin;
