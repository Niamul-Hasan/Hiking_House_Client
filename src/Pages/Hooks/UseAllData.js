import { useEffect, useState } from "react";

const UseAllData = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://hiking-house-server.vercel.app/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}
export default UseAllData;