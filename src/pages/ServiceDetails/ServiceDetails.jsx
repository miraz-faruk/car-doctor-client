import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../../components/SharedBanner";
import img1 from "../../assets/images/banner/3.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import logo from "../../assets/logo.svg";

const ServiceDetails = () => {

    const service = useLoaderData();

    // Check if service data is available
    if (!service) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-4xl font-bold text-red-500">Service not found!</h1>
                <p className="text-gray-500 mt-4">
                    The requested service details could not be loaded.
                </p>
                <Link to="/" className="btn bg-[#FF3811] text-white mt-6">
                    Go Back Home
                </Link>
            </div>
        );
    }
    const { title, description, facility, price } = service;
    return (
        <div>
            <SharedBanner headingText="Service Details" text="Home/Service Details"></SharedBanner>
            <div className="flex justify-between mt-32">
                <div className="w-2/3">
                    <img className="rounded-lg" src={img1} alt="" />
                    <div className="mt-12">
                        <h2 className="font-bold text-4xl">{title}</h2>
                        <p className="text-[#737373] py-7">{description}</p>
                        <div className="grid grid-cols-2 gap-6">
                            {facility?.map((item, index) => (
                                <div key={index} className="card bg-[#F3F3F3] w-96 rounded-xl border-t-2 border-[#FF3811]">
                                    <div className="card-body">
                                        <h2 className="card-title font-bold text-xl">{item.name}</h2>
                                        <p className="text-[#737373]">{item.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#737373] py-7 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <h2 className="font-bold text-4xl">3 Simple Steps to Process</h2>
                        <p className="text-[#737373] py-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="card border-t-2 border-[#E8E8E8]">
                            <div className="card-body flex justify-center items-center">
                                <div className="p-3 bg-[#FF38111A] rounded-full">
                                    <h1 className="bg-[#FF3811] w-16 h-16 flex justify-center items-center rounded-full text-white text-xl font-bold border-[#FF38111A] text-center">01</h1>
                                </div>
                                <h2 className="card-title text-">STEP ONE</h2>
                                <p className="text-center text-[#737373]">It uses a dictionary of over 200.</p>
                            </div>
                        </div>
                        <div className="card border-t-2 border-[#E8E8E8]">
                            <div className="card-body flex justify-center items-center">
                                <div className="p-3 bg-[#FF38111A] rounded-full">
                                    <h1 className="bg-[#FF3811] w-16 h-16 flex justify-center items-center rounded-full text-white text-xl font-bold border-[#FF38111A] text-center">02</h1>
                                </div>
                                <h2 className="card-title text-">STEP TWO</h2>
                                <p className="text-center text-[#737373]">It uses a dictionary of over 200.</p>
                            </div>
                        </div>
                        <div className="card border-t-2 border-[#E8E8E8]">
                            <div className="card-body flex justify-center items-center">
                                <div className="p-3 bg-[#FF38111A] rounded-full">
                                    <h1 className="bg-[#FF3811] w-16 h-16 flex justify-center items-center rounded-full text-white text-xl font-bold border-[#FF38111A] text-center">03</h1>
                                </div>
                                <h2 className="card-title text-">STEP THREE</h2>
                                <p className="text-center text-[#737373]">It uses a dictionary of over 200.</p>
                            </div>
                        </div>
                    </div>
                    <img className="rounded-xl" src={img2} alt="" />
                </div>
                <div className="1/3 space-y-8">
                    <div className="card bg-[#F3F3F3] p-10 space-y-5">
                        <h2 className="text-2xl font-bold">Services</h2>
                        <div className="flex justify-between items-center font-semibold bg-white p-4 rounded-md hover:bg-[#FF3811] hover:text-white">
                            <h2>Full Car Repair</h2>
                            <GoArrowRight className="text-xl"></GoArrowRight>
                        </div>
                        <div className="flex justify-between items-center font-semibold bg-white p-4 rounded-md hover:bg-[#FF3811] hover:text-white">
                            <h2>Engine Repair</h2>
                            <GoArrowRight className="text-xl"></GoArrowRight>
                        </div>
                        <div className="flex justify-between items-center font-semibold bg-white p-4 rounded-md hover:bg-[#FF3811] hover:text-white">
                            <h2>Automatic Services</h2>
                            <GoArrowRight className="text-xl"></GoArrowRight>
                        </div>
                        <div className="flex justify-between items-center font-semibold bg-white p-4 rounded-md hover:bg-[#FF3811] hover:text-white">
                            <h2>Engine Oil Change</h2>
                            <GoArrowRight className="text-xl"></GoArrowRight>
                        </div>
                        <div className="flex justify-between items-center font-semibold bg-white p-4 rounded-md hover:bg-[#FF3811] hover:text-white">
                            <h2>Battery Charge</h2>
                            <GoArrowRight className="text-xl"></GoArrowRight>
                        </div>
                    </div>
                    <div className="bg-[#151515] text-white rounded-xl p-10 w-96">
                        <h2 className="font-bold text-3xl mb-5">Download</h2>
                        <div className="flex justify-between mb-5">
                            <div className="flex items-center gap-[10px]">
                                <HiOutlineDocumentChartBar className="text-4xl" />
                                <div>
                                    <h4 className="text-lg font-semibold">Our Brochure</h4>
                                    <p className="text-[#A2A2A2]">Download</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#FF3811] p-5 text-white text-xl font-extrabold rounded-md "><GoArrowRight /></button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-[10px]">
                                <HiOutlineDocumentChartBar className="text-4xl" />
                                <div>
                                    <h4 className="text-lg font-semibold">Company Details</h4>
                                    <p className="text-[#A2A2A2]">Download</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#FF3811] p-5 text-white text-xl font-extrabold rounded-md "><GoArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#151515] text-white rounded-xl p-10 w-96 text-center pb-20">
                        <div className="flex flex-col items-center">
                            <img className="mb-5" src={logo} alt="" />
                            <h2 className="text-xl font-bold">Need Help? We Are Here To Help You</h2>
                            <div className="relative">
                                <div className="bg-white rounded-xl mt-7 px-11 py-5">
                                    <h2 className="text-xl font-bold text-[#FF3811]">Car Doctor <span className="text-black">Special</span></h2>
                                    <h2 className="font-bold text-[#737373] pb-5">Save up to <span className="text-[#FF3811]">60% off</span></h2>
                                </div>
                                <button className="absolute -bottom-5 right-8 btn px-11 bg-[#FF3811] text-white text-lg font-semibold border-[#FF3811]">Get A Quote</button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold">Price ${price}</h1>
                    <div>
                        <Link to={`/checkout/${service._id}`}>
                            <button className="w-full bg-[#FF3811] text-white text-lg font-semibold py-4 rounded-md">Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;