import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div>
      <header class="text-gray-600 body-font bg-slate-900	item-center ">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row ">
          <a
            href="#"
            class="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0"
          >
            <span class="ml-3 text-xl no-underline text-white">API's</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              class="mr-5 text-yellow-500 hover:text-white no-underline"
            >
              Super Heros
            </Link>
            <Link
              to="/spotify"
              class="mr-5 text-yellow-500 hover:text-white no-underline"
            >
              Spotify
            </Link>
            <Link
              to="/bitcoin"
              class="mr-5 text-yellow-500 hover:text-white no-underline"
            >
              Bitcoin
            </Link>
            <Link
              to="/googlelocation"
              class="mr-5  text-yellow-500 hover:text-white no-underline"
            >
              Google Locations
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
