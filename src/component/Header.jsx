
import { useState } from "react";
import Modal from "~/component/Modal.jsx";
import CardDesigner from "~/component/CardDesigner.jsx";

export default function Header({onPlatformSelect}) {
    const [showModal, setShowModal] = useState(false);
    // const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const handlePlatformSelect = (platform) => {
        // setSelectedPlatform(platform);
        onPlatformSelect(platform)
        setShowModal(false); // Modalı kapat
    };

    const platforms = [
        { name: "Instagram Post 1000 x 1000", width: 1000, height: 1000 },
        { name: "Twitter Header 1500 x 500", width: 1500, height: 500 },
        { name: "YouTube Thumbnail 1280 x 720", width: 1280, height: 720 },
    ];

    return (
        <header className="w-full z-10 p-4 top-0 fixed bg-[#474747] ">
            <nav className="container flex justify-between  items-center">
                <h3 className="text-lg text-white xs:text-md sm:text-md md:text-lg px-4 lg:text-lg ">
                    Congrates Card Generator
                </h3>

                <button
                    className="bg-green-400 rounded-md flex justify-center items-center  text-white text-center p-2 "
                    onClick={handleShowModal}
                >
                    Create Project
                </button>
            </nav>

            {showModal && (
                <div className="mt-16">
                    <Modal
                        platforms={platforms}
                        onClose={() => setShowModal(false)}
                        onSelect={handlePlatformSelect}
                    />
                </div>
            )}

        </header>
    );

}
