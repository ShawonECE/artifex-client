import { Helmet } from "react-helmet-async";
import { useContext, useState } from 'react';
import { AuthContext } from "./AuthProvider";
import { useEffect } from 'react';
import MyCraftCard from "./MyCraftCard";

const MyCrafts = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/sculptures/user/${user.email}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [user]);
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount === 1) {
                alert('Deleted successfully');
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            } else {
                alert('Deletion failed');
            }
        });
    };
    const handleUpdate = (id) => {
        console.log(id, "updated");
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    items.map(craft => <MyCraftCard key={craft._id} craft={craft} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;