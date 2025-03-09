import "./index.css";
const Footer = () => {
  return <footer>
    <div className="relative py-8 bg-gray-900">
      <div className="flex flex-col items-center">
        <img alt="Company name" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&amp;shade=500" className="h-10 w-auto" />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="space-y-6 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Solutions</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Marketing</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Analytics</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Automation</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Commerce</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Insights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Support</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Submit ticket</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Guides</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Company</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">About</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Blog</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Jobs</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Legal</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Terms of service</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">Privacy policy</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-200">License</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
}

export default Footer