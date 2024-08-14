import Banner from '../assets/banner.png'
import Arrow from '../assets/arrow.png'

function BannerHeader() {
    return (
        <section className='relative flex items-center justify-center'>
            <img src={Banner} alt="Banner" className='blur-1 w-screen h-auto'/>
            <div className='absolute text-center z-10'>
                <h1 className='text-5xl font-medium pb-3'>Shop</h1>
                <span className='flex items-center justify-between'><p className='font-medium'>Home</p><img src={Arrow} alt="Arrow" /> <p>Shop</p></span>
            </div>
        </section>
    )
}

export { BannerHeader };