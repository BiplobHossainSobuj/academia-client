
const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto my-6  rounded-lg">
                <div className="carousel w-full rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <div className="hero rounded-lg h-[650px]" style={{ backgroundImage: 'url(https://i.ibb.co/WPpG4Z4/thesis-concept-illustration-114360-7690.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-5xl font-bold text-white"> Book Out Thesis and Research Guide</h1>
                                    <p className="mb-5 text-xl">A Complete guideline to become genius on research and thesis field.</p>
                                    <button className="btn bg-orange-300">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(https://i.ibb.co/nD8JLqH/app-development-illustration-52683-47931.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-5xl font-bold">Get Programming Courses</h1>
                                    <p className="mb-5 text-xl">From begining to advance level of coding with live projects </p>
                                    <button className="btn bg-orange-300">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(https://i.ibb.co/K0ZkvL6/recruitment-concept-illustration-with-big-cv-23-2148641080.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-5xl font-bold">Become a resume master</h1>
                                    <p className="mb-5 text-xl">Learn From experience CV guy with 10 years of experienc</p>
                                    <button className="btn bg-orange-300">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(https://i.ibb.co/8sbwgsb/father-helping-little-son-with-homework-23-2148350760.jpg)' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-5xl font-bold">Book you home tutor from top institute of Bangladesh</h1>
                                    <p className="mb-5 text-xl">The store are like treasure hunts, you never know what you’ll find.All your need meets here.</p>
                                    <button className="btn bg-orange-300">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;