import Header from "~/component/Header.jsx";
import {useEffect, useState} from "react";
import Disconnetced from "~/component/Disconnetced.jsx";
import Footer from "~/component/Footer.jsx";
import CardDesigner from "~/component/CardDesigner.jsx";

function App() {

    const [connected, setConnected] = useState(navigator.onLine);
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handleCheck = () => {
        setConnected(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleCheck);
        window.addEventListener("offline", handleCheck);

    }, [])

    const handlePlatformSelect = (platform) => {
        setSelectedPlatform(platform);
    };

    return (
        <>
            {!connected ? <Disconnetced/> : (
                <>
                    <Header onPlatformSelect={handlePlatformSelect} />
                    {selectedPlatform && <CardDesigner platform={selectedPlatform} />}
                    <Footer/>
                </>
            )}
        </>

    )
}

export default App