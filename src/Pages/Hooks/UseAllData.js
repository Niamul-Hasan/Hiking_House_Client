import { useEffect, useState } from "react";

const UseAllData = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}
export default UseAllData;