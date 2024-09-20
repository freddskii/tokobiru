import Button from "./Button.jsx";

const Card = (props) => {
  const { data, onClick } = props;
  return (
    <div className="py-4 px-2 cursor-pointer">
      <img src={data.images[0]} alt={data.title} className="w-full h-auto aspect-square object-cover mb-4" />
      <h3 className="text-xl  mb-2">{data.title}</h3>
      <p className="text-gray-700 mb-2 line-clamp-2">{data.description}</p>
      <p className="text-lg text-gray-700 font-bold mb-4">$ {data.price}</p>
      <Button onClick={onClick}>Add to Cart</Button>
    </div>
  );
};

export default Card;
