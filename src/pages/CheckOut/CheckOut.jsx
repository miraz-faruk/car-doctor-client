import { useLoaderData } from "react-router-dom";
import SharedBanner from "../../components/SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const price = form.price.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const booking = {
            img,
            customerName: name,
            email,
            service,
            serviceId: _id,
            price,
            date,
            phone: phone
        }
        console.log(booking);

        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('service book successfully')
                }
            })
    }
    return (
        <div>
            <SharedBanner headingText="Check Out" text="Home/Checkout"></SharedBanner>
            <h2 className="text-3xl font-bold text-center mt-10"> Your service is - <span className="text-[#FF3811]">{title}</span></h2>
            <div className="my-10 bg-[#F3F3F3] p-24 rounded-xl">
                <h2 className="text-center text-2xl font-semibold">Please Fill-up he form for confirmation</h2>
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Your Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Service</span>
                            </label>
                            <input type="text" name="service" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={'$ ' + price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]">Login</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default CheckOut;