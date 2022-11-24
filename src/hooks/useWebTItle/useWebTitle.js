import { useEffect } from "react";

const useWebTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title])
};

export default useWebTitle;