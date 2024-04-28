import { useEffect, useState } from 'react';
import CraftCard from './CraftCard';
import { useNavigate } from 'react-router-dom';
import TypeWriting from './TypeWriting';

const CraftsInHome = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3000/some_sculptures')
        .then((response) => response.json())
        .then(data => setItems(data));
    }, []);
    return (
        <div className='mt-16'>
            <TypeWriting text="Explore our Sculptures & Crafts" keywords={['Art', 'Mythology', 'Fantasy', 'Culture', 'Aesthetics']}></TypeWriting>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    items.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
            <div className='flex justify-center mt-8'>
                <button onClick={() => navigate('/crafts')} className='btn'>See all</button>
            </div>
        </div>
    );
};

export default CraftsInHome;