const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <div className="max-w-[160px] mx-auto md:mx-0">
        <div className="text-primary border-primary border-2 p-3 hover:bg-primary hover:text-white">{props.children}</div>
      </div>
    </button>
  );
  // return <button>{props.children}</button>;
};

export default Button;
