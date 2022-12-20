import { useEffect, useState } from "react"

const useBuyerProvide = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        fetch(`https://resell-autocar-server.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsBuyer(data.isBuyer);
                setIsBuyerLoading(false);
            })
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyerProvide;