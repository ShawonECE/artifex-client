import { useEffect, useState } from 'react';

const CraftsInHome = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/some_sculptures')
        .then((response) => response.json())
        .then(data => setItems(data));
    }, []);
    return (
        <div>
            {items.length}
        </div>
    );
};

export default CraftsInHome;