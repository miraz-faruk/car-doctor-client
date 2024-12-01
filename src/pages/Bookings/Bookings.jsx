import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5001/bookings?email=${user?.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5001/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                });
        };
    };

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5001/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    if (data.modifiedCount > 0) {
                        const updatedBookings = bookings.map(booking =>
                            booking._id === id ? { ...booking, status: 'confirm' } : booking
                        );
                        setBookings(updatedBookings);
                    }
                }
            })
    }

    return (
        <div>
            <h2>My Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Customer Info</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;