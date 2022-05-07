import { useEffect, useState } from "react";

const UseSingleData = (id) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:4000/inventories/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [id])
    return [inventory, setInventory]
}
export default UseSingleData;