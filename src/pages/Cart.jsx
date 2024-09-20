import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
const Cart = () => {
  const carts = useSelector((state) => state.cart.data);

  return (
    <div className="w-full pt-24 min-h-screen">
      <div className="container mx-auto px-4 pt-10 pb-8">
        <h1 className="text-3xl font-bold mb-10 text-primary">Your Cart</h1>
        <div className="border-b-[1px] border-gray-300 mb-8"></div>
        <div>
          {carts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-8">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-center">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2 px-4 text-left">{item.title}</td>
                      <td className="py-2 px-4 text-center">{item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button> Check Out</Button>
            </div>
          ) : (
            <h1 className="text-center py-8">Your Cart is Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
