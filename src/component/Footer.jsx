export default function Footer(){
    const time = new Date().getFullYear();
    return (
        <footer className="w-full fixed py-4 bottom-0 z-10 bg-black text-white">
            <div className="container flex items-center justify-center">Copyright {time}</div>
        </footer>
    )
}