const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-[100px] m-[10px] flex items-center justify-center border border-gray-300 shadow-lg ">{children}</div>;
};

export default Card;
