interface CriptoCardProps {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume: number;
  image: string;
  priceChange: number;
}

const CriptoCard = ({
  name,
  symbol,
  price,
  marketCap,
  volume,
  image,
  priceChange,
}: CriptoCardProps) => {
  return (
    <div className="flex justify-between items-center bg-primary p-3 rounded-lg text-white">
      <div className="grid gap-2">
        <div className="flex gap-2 font-bold text-xl">
          <h2>{name}</h2>
          <p>{symbol}</p>
        </div>

        <div className="flex justify-between font-semibold">
          <div className="grid gap-2">
            <h3 className="text-lg">Valor atual - ${price}</h3>
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
      {/* <p>Market Cap: ${marketCap}</p>
      <p>Volume(24h): ${volume}</p> */}
    </div>
  );
};

export default CriptoCard;
