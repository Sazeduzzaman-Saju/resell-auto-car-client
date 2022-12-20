import { useEffect, useState } from "react"

const useUserToken = (email) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://resell-autocar-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.access_token) {
                        localStorage.setItem('access_token', data.access_token)
                        setToken(data.access_token);
                    }
                })
        }
    }, [email])
    return [token];
}

export default useUserToken;