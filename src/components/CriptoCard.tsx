import { MoveDown, MoveUp } from "lucide-react";

interface CriptoCardProps {
  name: string;
  symbol: string;
  price: number;
  image: string;
  priceChange: number;
  priceColor?: string;
}

const CriptoCard = ({
  name,
  symbol,
  price,
  image,
  priceChange,
  priceColor,
}: CriptoCardProps) => {
  const textColor =
    priceColor === "red"
      ? "text-error"
      : priceColor === "green"
      ? "text-success"
      : "text-black";

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg text-black shadow-md w-full">
      <div className="grid gap-2">
        <div className="flex gap-2 font-bold text-xl">
          <h2>{name}</h2>-<p>{symbol}</p>
        </div>

        <div className="flex justify-between font-semibold">
          <div className="grid gap-2">
            <h3 className={`text-sm sm:text-md ${textColor} flex items-center`}>
              Valor atual - $ {price}
              {priceColor === "red" ? (
                <MoveDown size={16} className="text-error mb-1" />
              ) : priceColor === "green" ? (
                <MoveUp size={16} className="text-success mb-1" />
              ) : null}
            </h3>
            {priceChange < 0 ? (
              <p className="badge badge-error p-3">Flutuação: {priceChange}%</p>
            ) : (
              <p className="badge badge-success p-3">
                Flutuação: {priceChange}%
              </p>
            )}
          </div>
        </div>
      </div>
      <img src={image} alt={name} className="h-16 w-16" />
    </div>
  );
};

export default CriptoCard;
