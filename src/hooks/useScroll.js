import { useEffect, useState } from "react";



const useScrollPosition = () => {
    // variables
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [previousScrollPositionY, setPreviousScrollPositionY] = useState(0);
    const [scrollPositionOffset, setScrollPositionOffset] = useState(0);
    // function to handle scroll
    const handleScroll = () => {
        return setScrollPositionY((prevScrollPositionY) => {
            const currentScrollPositionY = window.scrollY;
            setPreviousScrollPositionY(prevScrollPositionY);
            return currentScrollPositionY;
        });
    };
    useEffect(() => {
        // set up listener for handling scroll
        window.addEventListener('scroll', handleScroll);
        // remove scroll event on destroy
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return { scrollPositionY, scrollPositionOffset, previousScrollPositionY };
};

export default useScrollPosition;