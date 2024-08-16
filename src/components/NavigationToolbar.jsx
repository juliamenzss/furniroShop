import Arrow from '../assets/banner/arrow.png'

function NavigationToolbar() {
  return (
    <section className="h-12 sm:h-20 flex items-center p-4 bg-light-yellow w-full">
        <ul className="text-sm sm:space-x-3 md:text-base md:flex justify-start items-center pl-16 md:space-x-5 font-normal text-light-gray ">
            <li><a href="/home">Home</a></li>
            <img src={Arrow} alt="Arrow" className='h-3 w-auto' />
            <li><a href="/Shop">Shop</a></li>
            <img src={Arrow} alt="Arrow" className='h-3 w-auto' />
        </ul>
        <div className='flex items-center p-6'>
        <div className="h-9 mx-auto border-l-2 my-4 border-light-gray"></div>
        <p className='p-6 font-normal'>Asgaard sofa</p>
        </div>
    </section>
  );
}
export { NavigationToolbar }