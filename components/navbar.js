export default function NavBar() {

    return (
    <nav className="bg-white border-b px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div className="container md:grid md:grid-cols-3 flex-wrap items-center mx-auto my-2">
      <a href="/" className="md:col-span-1 lg:col-span-2 flex mx-auto md:mx-0">
      <span className='mx-auto md:mx-0 border-4 px-3 py-2 font-Arial font-extrabold text-2xl italic'>FEELSET</span>
      </a>
        <div className="flex font-OpenSans text-lg mt-3 md:col-span-2 lg:col-span-1">
            <a href="/about" className="flex-1 text-center text-gray-100 md:border-0 hover:text-peach">
              About
            </a>
            <a href="/submissions" className="flex-1 text-center text-gray-100 md:border-0 hover:text-peach">
              Submissions
            </a>
            <a href="/youtube" className="flex-1 text-center text-gray-100 md:border-0 hover:text-peach">
              Youtube
            </a>
        </div>
      </div>
    </nav>
    );
  }