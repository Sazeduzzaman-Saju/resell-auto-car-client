import { useEffect, useState } from "react"

const useAdminProvide = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${email}`)
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