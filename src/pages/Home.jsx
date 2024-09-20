import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/sliceCart";
import Card from "../components/Card";
import heroImage from "../assets/images/hero-img.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    }, 6);
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary pt-24 py-16">
        <div className="container px-8 mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
            <p className="text-white mb-6">Discover our amazing products and services. We offer the best quality at affordable prices.</p>
            <div className="max-w-[160px] mx-auto md:mx-0">
              <Link to="/product" className="text-white border-white border-2 py-3 px-5 my-2 hover:bg-white hover:text-primary ">
                Get Started
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <img src={heroImage} alt="Hero" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-md shadow-lg" />
          </div>
        </div>
      </section>
      {/* Product Section */}
      <section className="bg-white py-16">
        <div className="container px-8 mx-auto items-center">
          <div className="pt-8 pb-4">
            <h3 className="text-primary">MOST POPULAR</h3>
            <h2 className="text-4xl my-6 text-primary">Discover the Latest Additions at Your Top Choice </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} data={product} onClick={() => {}} />
            ))}
          </div>
        </div>
      </section>
      {/* Reason Section */}
      <section className="bg-secondary py-16">
        <div className="container px-8 mx-auto items-center">
          <div className="pt-8 pb-4">
            <h2 className="text-4xl my-6 text-primary">Why Shop With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-10">
              <h3 className="text-2xl text-gray-700  font-semibold mb-4">High-Quality Products</h3>
              <p>Our products are carefully sourced and thoroughly tested to ensure the highest quality, durability, and performance. We believe in offering only the best to our customers.</p>
            </div>
            <div className="bg-white p-10">
              <h3 className="text-2xl text-gray-700 font-semibold mb-4">Affordable Prices</h3>
              <p>We strive to provide the best value for money. Our pricing is competitive, and we regularly offer promotions and discounts, so you can get quality products without breaking the bank.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-32">
        <div className="container px-8 mx-auto items-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-16 text-primary">Ready to Explore Our Product</h2>
            <div className="max-w-[160px] mx-auto md:mx-0">
              <Link to="/product" className="text-primary border-primary border-2 py-3 px-5 my-2 hover:bg-primary hover:text-white ">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
