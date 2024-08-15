import Banner from '../assets/banner.png'
import Arrow from '../assets/arrow.png'

function BannerHeader() {
    return (
        <section className='relative flex items-center justify-center'>
            <img src={Banner} alt="Banner" className='h-28 sm:h-auto w-full blur-1'/>
            <div className='absolute text-center z-10'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium sm:pb-1 md:pb-2'>Shop</h1>
                <span className='flex items-center justify-between'><p className='text-sm sm:text-base md:text-lg font-medium'>Home</p><img src={Arrow} alt="Arrow" className='h-3 px-1' /> <p className='text-sm sm:text-base md:text-lg'>Shop</p></span>
            </div>
        </section>
    )
}

export { BannerHeader };