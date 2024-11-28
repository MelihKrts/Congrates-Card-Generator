import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <main className='relative'>
            <header className='w-full bg-black text-white fixed z-10'>
                <div className='flex flex-1  justify-start items-stretch'>
                    <h4 className='text-2xl px-4 py-4'>Congrats Card Generator</h4>

                </div>
            </header>

            <section className="w-full pt-16">
                <div className='container flex flex-col justify-center items-center'>

                    <h4 className='text-center sm:text-center sm:text-xl md:text-2xl lg:text-3xl md:text-center lg:text-center py-4 text-4xl font-semibold'>Congrates Card Generator</h4>

                    <p className='text-justify px-4 text-xl'>Allows you to create greeting cards for special occasions, loved ones and customizable</p>

                    <Link to="/generator" className='w-2/3 sm:w-1/3 md:w-1/3 lg:w-1/2 flex items-center justify-center'>
                        <button className=' px-4 py-4 border-none bg-teal-400 rounded-md my-4'>Create Card</button>
                    </Link>

                </div>
            </section>
        </main>
    )
}
