export default function Disconnetced() {
    return (
        // <div className="bg-blue-400 w-full h-screen text-left text-white">
        //     <p className="font-semibold">Control to the Internet Connection</p></div>

        <div className="bg-blue-600 w-full h-screen flex items-center justify-center text-center p-4">
            <div className="bg-blue-800 p-8 rounded-lg shadow-lg max-w-sm mx-auto">
                <p className="text-3xl font-bold text-white mb-4">No Internet Connection</p>
                <p className="text-lg text-gray-200 mb-6">
                    It seems you've lost connection. Please check your internet.
                </p>
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full border-t-4 border-white w-16 h-16 border-solid"></div>
                </div>
            </div>
        </div>
    )
}