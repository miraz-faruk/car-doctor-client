import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card bg-base-100 w-full border">
            <figure className="px-5 pt-5">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-[208px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
                <div className="flex items-center text-[#FF3811] text-xl font-semibold">
                    <p>Price : ${price}</p>
                    <Link to={`/service-details/${_id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <button><GoArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
}
export default ServiceCard;