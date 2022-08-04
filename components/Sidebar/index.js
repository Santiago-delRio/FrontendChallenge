const Sidebar = () => {
  return (
    <div className="h-screen max-w-[310px] py-8 px-4 border-r border-[#EAECF0] flex flex-col justify-between">
      {/* Main info */}
      <div className="mx-2">
        <h2 className="text-2xl font-bold text-boldText ml-2 mb-6">
          Cybertiks
        </h2>
        {/* Search */}
        <div className="relative grayBorders flex items-center mb-8">
          <svg
            width="24"
            height="24"
            viewBox="-1 -2 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-6 w-6 left-[14px]"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#667085"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="w-full py-[10px] px-[14px] pl-11 rounded-lg text-lightGray placeholder:text-lightGray font-normal"
          />
        </div>
        {/* Links */}
        <nav className="mb-10 mx-1">
          <ul>
            {/* Projects */}
            <li>
              <button className="flex mb-5 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lightGray mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-darkGray font-medium">Projects</span>
              </button>
            </li>
            {/* Quotes */}
            <li>
              <button className="flex mb-5 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lightGray mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                <span className="text-darkGray font-medium">Quotes</span>
              </button>
            </li>
            {/* Contracts */}
            <li>
              <button className="flex mb-5 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lightGray mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span className="text-darkGray font-medium">Contracts</span>
              </button>
            </li>
            {/* Notifications */}
            <li>
              <button className="flex mb-5 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lightGray mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="text-darkGray font-medium">Notifications</span>
              </button>
            </li>
            {/* Payments */}
            <li>
              <button className="flex w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-lightGray mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <span className="text-darkGray font-medium">Payments</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Settings - Account */}
      <div>
        {/* Settings */}
        <ul className="mx-3 mb-8">
          {/* Support */}
          <li>
            <button className="flex mb-5 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-lightGray mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
              </svg>
              <span className="text-darkGray font-medium">Support</span>
            </button>
          </li>
          {/* Settings */}
          <li>
            <button className="flex w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-lightGray mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="text-darkGray font-medium">Settings</span>
            </button>
          </li>
        </ul>
        {/* Account */}
        <div className="flex justify-between items-start border-t border-[#EAECF0] pt-6 px-2">
          {/* Account info */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-10 h-10 rounded-full mr-3 bg-gray-300"
              width="40"
              height="40"
              src="/images/Avatar1.png"
              alt="Account avatar"
            />
            <ul className="">
              <li className="text-sm text-darkGray font-semibold">
                Olivia Rhye
              </li>
              <li className="text-sm text-lightGray font-normal">
                olivia@untitledui.com
              </li>
            </ul>
          </div>
          {/* Logout */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-lightGray"
              width="24"
              height="24"
              viewBox="-1 -2 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
