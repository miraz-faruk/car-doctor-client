import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-7'>
                    <h1 className='text-[#FF3811] font-bold text-xl'>About Us</h1>
                    <h1 className="text-5xl font-bold mb-7">We are qualified & of experience in this field</h1>
                    <div className='text-[#737373] space-y-5'>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                    </div>
                    <button className="btn bg-[#FF3811] border-[#FF3811] text-white mr-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;