import { useEffect, useState } from "react";

const UseAllData = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://serene-coast-39945.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}
export default UseAllData;