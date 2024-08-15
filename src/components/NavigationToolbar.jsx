import Arrow from '../assets/arrow.png'

function NavigationToolbar() {
  return (
    <section className="h-12 sm:h-20 flex items-center p-4 bg-light-salmon w-full">
        <ul className="text-sm sm:space-x-3 md:text-base md:flex justify-start pl-16 md:space-x-5 font-normal text-light-gray ">
            <li><a href="/home">Home</a></li>
            <img src={Arrow} alt="Arrow" className='h-3 w-auto my-2' />
            <li><a href="/Shop">Shop</a></li>
            <img src={Arrow} alt="Arrow" className='h-3 w-auto my-2' />
        </ul>
    </section>
  );
}
export { NavigationToolbar }