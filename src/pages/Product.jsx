import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/sliceCart";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    }, 15);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        qty: 1,
      })
    );
  };

  return (
    <div className="w-full pt-24 min-h-screen">
      <div className="container mx-auto px-4 pt-10 pb-8">
        <h1 className="text-3xl font-bold mb-10 text-primary">Our Products</h1>
        <div className="border-b-[1px] border-gray-300"></div>
        <h3 className="text-primary pt-8">Showing all {products.length} results</h3>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} data={product} onClick={() => handleAddToCart(product)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
