import {useState} from "react";
import Modal from "~/component/Modal.jsx";
import CardDesigner from "~/component/CardDesigner.jsx";

export default function CreateProject(){
    const [showModal, setShowModal] = useState(false);
    const [selectedPlatform,setSelectedPlatform] = useState(null);

    const handleShowModal = () => {
        setShowModal(!showModal);
        selectedPlatform(platforms)
    }

    const handlePlatformSelect = (platform) => {
        setSelectedPlatform(platform);
        setShowModal(false); // Modalı kapat
    };

    const platforms = [
        {name:"Instagram Post 1000 x 1000", width:1000, height:1000},
        { name: "Twitter Header 1500 x 500", width: 1500, height: 500 },
        { name: "YouTube Thumbnail 1280 x 720", width: 1280, height: 720 },
    ]

    return (
        <div className="pt-16">
            <button className="bg-green-400 rounded-md flex justify-center items-center mx-auto px-4 py-4 text-white text-center" onClick={handleShowModal} >Create Project</button>
            {showModal && (
                <Modal
                    platforms={platforms}
                    onClose={() => setShowModal(false)}
                    onSelect={handlePlatformSelect}
                />
            )}

            {!showModal && selectedPlatform && (
                <CardDesigner platform={selectedPlatform} />
            )}

        </div>

    )
}