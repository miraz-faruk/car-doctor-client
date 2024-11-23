import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
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
                    <button><GoArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;