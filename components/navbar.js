export default function NavBar() {

    return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div className="container md:grid md:grid-cols-3 flex-wrap items-center mx-auto my-2">
      <a href="/" className="col-span-1 flex items-center mx-auto md:mx-0">
      <span className='mx-auto md:mx-0 border-4 px-3 py-2 font-Arial font-extrabold text-2xl italic'>FEELSET</span>
      </a>
      <div class="w-auto md:col-span-2 lg:col-span-1" id="navbar-solid-bg">
        <ul className="flex flex-row justify-center mt-4 md:mr-0 md:ml-0 md:mt-0 md:flex-row md:justify-between font-OpenSans text-lg">
          <li>
            <a href="/about" className="block mr-10 text-gray-100 md:border-0 hover:text-peach">
              About
            </a>
          </li>
          
          <li>
            <a href="/submissions" className="block mr-10 text-gray-100 md:border-0 hover:text-peach">
              Submissions
            </a>
          </li>
          <li>
            <a href="/youtube" className="block text-gray-100 md:border-0 hover:text-peach">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    );
  }