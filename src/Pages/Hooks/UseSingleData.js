import { useEffect, useState } from "react";

const UseSingleData = (id) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://serene-coast-39945.herokuapp.com/inventories/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [id])
    return [inventory, setInventory]
}
export default UseSingleData;