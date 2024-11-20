import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* Top Section with Logo and Navigation Links */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img
              src="../../../logo.png"
              className="h-12 w-32"
              alt="The Success Shelf Logo"
            />
           
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="/" className="hover:underline">The Success Shelf™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.5c-.9.4-1.8.6-2.8.8A4.9 4.9 0 0 0 23.3 3a9.8 9.8 0 0 1-3.1 1.2A4.8 4.8 0 0 0 16.8 3c-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .7.1 1-4.1-.2-7.7-2.2-10.2-5.1-.4.6-.6 1.3-.6 2 0 1.7.9 3.1 2.2 4a4.9 4.9 0 0 1-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.9-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.7 3.4a9.8 9.8 0 0 1-6 2c-.4 0-.8 0-1.1-.1a14 14 0 0 0 7.7 2.2c9.3 0 14.3-7.7 14.3-14.4v-.6a10.3 10.3 0 0 0 2.5-2.6z" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c-5.5 0-10 4.4-10 10 0 4.4 3 8.2 7 9.5V15h-2v-3h2v-2.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2.1.1v2.4h-1.4c-1.1 0-1.4.5-1.4 1.3V12h3l-.4 3h-2.6v6.7c4-.3 7-4.1 7-9.4 0-5.5-4.5-10-10-10z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.2c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM12 19c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm-1-4h2v-2h-2v2zm0-4h2V7h-2v4z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm3.8 14.6h-1.7v-4.7c0-1.2-.6-1.7-1.4-1.7-.7 0-1 .4-1.2.8v5.6h-1.7V9h1.7v1.2h.1c.2-.4.9-1 1.8-1 1.3 0 2.3.9 2.3 2.9v5.5z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
