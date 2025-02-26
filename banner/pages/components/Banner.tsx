import 'tailwindcss/index.css';

const Banner = () => {
  return (
    <div className="relative flex h-80 justify-center w-full bg-blue-100">
      <div className="flex gap-x-6 max-w-7xl">
        <div className="flex items-center py-6">
          <img
            className="rounded-xl w-[900px]"
            src="http://localhost:3000/banner.webp"
            alt="banner"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-wrap items-center flex-row">
            <h1 className="font-semibold text-3xl text-gray-900 pb-5">Module Federation</h1>
            <p className="text-sm/6 text-gray-900 pb-5">
              Architectural style that allows multiple applications to dynamically share code at runtime.
              It enables <strong className="font-semibold">micro-frontend</strong> architectures, where separate applications (or modules) can be developed and deployed independently while still working together seamlessly.
            </p>
            <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Learn more<span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner;