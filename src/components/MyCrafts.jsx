import { Helmet } from "react-helmet-async";
import { useContext, useState } from 'react';
import { AuthContext } from "./AuthProvider";
import { useEffect } from 'react';
import MyCraftCard from "./MyCraftCard";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const MyCrafts = () => {
    const { user } = useContext(AuthContext);
    const [selectedValue, setSelectedValue] = useState('Filter');
    const [items, setItems] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://artifex-server.vercel.app/sculptures/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setFiltered(data);
            })
    }, [user]);
    const handleFilter = (e) => {
        const value = e.target.value;
        setSelectedValue(value);

        if (value === "No filter") {
            setFiltered(items);
        } else if (value === "Customizable") {
            const current = items.filter(item => item.customization === "yes");
            setFiltered(current);
        } else {
            const current = items.filter(item => item.customization === "no");
            setFiltered(current);
        }
    };
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                fetch(`https://artifex-server.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        swal("Poof! Data has been deleted!", {
                            icon: "success",
                        });
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        setFiltered(remaining);
                    } else {
                        swal("Deletion failed!", {
                            icon: "warning",
                        });
                    }
                });
            }
        });
    };
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };
    return (
        <div>
            <Helmet>
                <title>Artifex | My Crafts</title>
            </Helmet>
            {
                !items.length && <h1 className="text-3xl font-bold text-center mt-10">You did not add any crafts yet</h1>
            }
            {
                items.length && <h1 className="text-3xl font-bold text-center mt-10">Crafts added by you</h1>
            }
            <div className="flex justify-center mt-8">
                <select value={selectedValue} onChange={handleFilter} className="select max-w-xs bg-gray-100 text-lg font-semibold">
                    <option disabled>Filter</option>
                    <option>No filter</option>
                    <option>Customizable</option>
                    <option>Non-Customizable</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    filtered.map(craft => <MyCraftCard key={craft._id} craft={craft} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;