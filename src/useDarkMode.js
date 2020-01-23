import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [ddd, setDDD] = useState(false);
    const processDarkMode = (enabled) => {
        if (enabled)
            document.body.style.backgroundColor = "black";
        else
            document.body.style.backgroundColor = "white";
    }
    return [ddd, setDDD, processDarkMode];
};

export default useDarkMode;