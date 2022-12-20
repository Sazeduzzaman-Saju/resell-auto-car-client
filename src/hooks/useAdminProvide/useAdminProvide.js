import { useEffect, useState } from "react"

const useAdminProvide = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`https://resell-autocar-server.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data.isAdmin);
                setIsAdminLoading(false);

            })
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdminProvide;