import image from '../assets/images/checkout/checkout.png';
import PropTypes from "prop-types";

const SharedBanner = ({ text, headingText }) => {
    return (
        <div className='rounded-2xl overflow-hidden'>
            <div className='relative'>
                <img className='w-full' src={image} alt="" />
                <h3 className='text-5xl font-bold text-white pl-24 absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515FF] to-[#15151500]'>{headingText}</h3>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                    <button className='w-[296px] h-[49.3px] bg-[#FF3811] flex justify-center items-center text-white text-lg font-bold'
                        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
                    >{text}</button>
                </div>
            </div>
        </div>
    );
};

SharedBanner.propTypes = {
    text: PropTypes.string.isRequired,
    headingText: PropTypes.string.isRequired,
};

export default SharedBanner;