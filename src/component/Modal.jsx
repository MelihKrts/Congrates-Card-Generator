export default function Modal({onClose, platforms, onSelect}) {
    return <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
            <h2 className="text-xl mb-4">Create Project</h2>
            <ul className="space-y-2">
                {platforms.map((platform, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onSelect(platform)}
                            className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            {platform.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                Close
            </button>
        </div>
    </div>
}