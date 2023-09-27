import { Link } from 'react-router-dom';

const Card = ({ donation, handleDonationRoute, classes = 'cursor-pointer', showPriceViewDetails = false }) => {
  const { bgColor, title, category, image, color, badgeBgColor, cost, id } = donation;

  return (
    <div className={`card rounded-lg ${classes}`} style={{ backgroundColor: `${bgColor}` }} onClick={() => handleDonationRoute(donation.id)}>
      <figure>
        <img src={image} alt={title} className="w-full" />
      </figure>
      <div className={`card-body ${showPriceViewDetails ? 'p-6' : ' p-4'}`}>
        <p className="badge badge-secondary border-transparent p-1 text-sm" style={{ backgroundColor: `${badgeBgColor}`, color: `${color}` }}>
          {category}
        </p>
        <h2 className="card-title font-semibold text-xl" style={{ color: `${showPriceViewDetails ? '#0B0B0B' : color}` }}>
          {title}
        </h2>
        {showPriceViewDetails && (
          <>
            <p className="price font-semibold text-base" style={{ color: `${color}` }}>
              ${cost.toFixed(2)}
            </p>
            <Link to={`/donation/${id}`} className={`inline-flex text-lg rounded-[4px] py-2 px-4 text-white w-fit`} style={{ backgroundColor: `${color}` }}>
              View Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
