import logo from "../assets/Monkey.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <section className="relative overflow-hidden py-10">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
            <img src={logo} alt="" className="w-[400px] h-[400px]" />
          </div>
          <div className="bg-black">
  <div className="flex items-center gap-x-5 p-11">
    <a href="www.linkedin.com" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
      <svg
        className="h-10 w-10 text-white"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
          fill="currentColor"
        />
      </svg>
    </a>
    <a href="www.x.com" aria-label="Find us on Twitter" target="_blank" rel="noopener">
      <svg
        className="h-10 w-10 text-white"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
          fill="currentColor"
        />
      </svg>
    </a>
    <a href="www.facebook.com" aria-label="Find us on Facebook" target="_blank" rel="noopener">
      <svg
        className="h-10 w-10 text-white"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
          fill="currentColor"
        />
      </svg>
    </a>
    <a href="www.instagram.com" aria-label="Find us on Instagram" target="_blank" rel="noopener">
      <svg
        className="h-10 w-10 text-white"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
          fill="currentColor"
        />
        <path
          d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
          fill="currentColor"
        />
      </svg>
    </a>
  </div>
</div>

          <div className="px-[15cm]">
           <td> <tr><th>
      <button
  type="button"
  className="flex items-center justify-center w-48 text-white bg-black rounded-lg h-14"
>
  <div className="mr-3">
    <svg viewBox="30 336.7 120.9 129.2" width={30}>
      <path
        fill="#FFD400"
        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
      ></path>
      <path
        fill="#FF3333"
        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
      ></path>
      <path
        fill="#48FF48"
        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
      ></path>
      <path
        fill="#3BCCFF"
        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
      ></path>
    </svg>
  </div>
  <div>
    <div className="text-xs">GET IT ON</div>
    <div className="-mt-1 font-sans text-xl font-semibold">Google Play</div>
  </div>
</button>

      </th>
      <th>
      <button
  type="button"
  className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
>
  <div className="mr-3">
    <svg viewBox="0 0 384 512" width={30}>
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      ></path>
    </svg>
  </div>
  <div>
    <div className="text-xs">Download on the</div>
    <div className="-mt-1 font-sans text-xl font-semibold">App Store</div>
  </div>
</button>
      </th>
            </tr>
            </td>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
            Company
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Press Kit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
            Support
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Account
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Help
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
            Legals
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-white hover:text-yellow-500"
                href="#"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <p className="flex items-center justify-center p-9 text-normal text-white ">
              © Copyright 2024. All Rights Reserved by Monkey.</p>
</section>

    </div>
  )
}

export default Footer
