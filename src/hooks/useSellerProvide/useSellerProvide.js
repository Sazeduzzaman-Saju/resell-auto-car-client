import { useEffect, useState } from "react"

const useSellerProvide = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/Seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsSeller(data.isSeller);
                setIsSellerLoading(false);

            })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSellerProvide;