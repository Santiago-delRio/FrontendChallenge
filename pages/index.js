import Head from "next/head";
import Sidebar from "../components/Sidebar";
import StatisticsCards from "../components/StatisticsCards";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Mina DiFlor",
      company: "QGIS",
      type: "Mineral Mapping",
      closingPrice: 500000,
      startDate: "2022-01-13",
      status: "In Progress",
      lastUpdate: {
        name: "Olivia Rhye",
        email: "olivia@untitledui.com",
        avatar: "/images/Avatar1.png",
      },
    },
    {
      id: 2,
      name: "MTCH SELL",
      company: "Software Development",
      type: "Website",
      closingPrice: 1320000,
      startDate: "2022-01-13",
      status: "Done",
      lastUpdate: {
        name: "Phoenix Baker",
        email: "phoenix@untitledui.com",
        avatar: "/images/Avatar4.png",
      },
    },
    {
      id: 3,
      name: "DDOG BUY",
      company: "Datadog Inc",
      type: "Mineral Mapping",
      closingPrice: 2000000,
      startDate: "2022-01-10",
      status: "In Progress",
      lastUpdate: {
        name: "Lana Steiner",
        email: "lana@untitledui.com",
        avatar: "https://ui-avatars.com/api/?name=Lana+Steiner",
      },
    },
    {
      id: 4,
      name: "ARKG BUY",
      company: "ARK Genomic",
      type: "Mineral Mapping",
      closingPrice: 700000,
      startDate: "2022-01-12",
      status: "Canceled",
      lastUpdate: {
        name: "Demi Wilkinson",
        email: "demi@untitledui.com",
        avatar: "https://ui-avatars.com/api/?name=Demi+Wilkinson",
      },
    },
    {
      id: 5,
      name: "SQ BUY",
      company: "Square, Inc.",
      type: "Mineral Mapping",
      closingPrice: 1100000,
      startDate: "2022-01-12",
      status: "Success",
      lastUpdate: {
        name: "Candice Wu",
        email: "candice@untitledui.com",
        avatar: "/images/Avatar3.png",
      },
    },
    {
      id: 6,
      name: "MSTR SELL",
      company: "MicroStrategy Inc.",
      type: "Mineral Mapping",
      closingPrice: 950000,
      startDate: "2022-01-06",
      status: "Success",
      lastUpdate: {
        name: "Natali Craig",
        email: "natali@untitledui.com",
        avatar: "https://ui-avatars.com/api/?name=Natali+Craig",
      },
    },
  ];

  return (
    <main className="flex h-screen w-screen">
      <Head>
        <title>Challenge frontend</title>
      </Head>

      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <section className="py-8 px-6 grow max-h-screen overflow-y-scroll bg-backgroundGray">
        {/* Header */}
        <header className="flex justify-between items-start px-2">
          {/* Greeting */}
          <div>
            <h1 className="text-3xl text-boldText font-medium mb-1">
              Welcome Back, Alec
            </h1>
            <span className="text-lightGray">
              View your quotes, invoices and more.
            </span>
          </div>
          {/* Hire services */}
          <button className="bg-accentBlue shadow-sm rounded-lg flex items-center py-[10px] px-[18px] text-white text-sm font-light">
            <svg
              width="16"
              height="16"
              viewBox="-2 -2 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M8 1V15M1 8H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Hire new service
          </button>
        </header>
        {/* Statistics */}
        <section className="grid grid-cols-2 gap-6 mt-11">
          {/* Spent */}
          <StatisticsCards
            statName="Spent in Services"
            statValue="$100,000"
            statPercentage={100}
          />
          <StatisticsCards
            statName="Open Projects"
            statValue="20"
            statPercentage={100}
          />
        </section>
        {/* Filters */}
        <div className="mt-14 px-2 flex justify-between items-center">
          {/* Search */}
          <div className="relative grayBorders w-fit flex items-center">
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
              placeholder="Search for Services"
              className="py-[10px] px-[14px] pl-11 min-w-[400px] rounded-lg text-lightGray placeholder:text-lightGray font-normal"
            />
          </div>
          <div className="flex">
            {/* Date */}
            <button className="flex items-center button py-[10px] mr-3">
              <svg
                width="24"
                height="24"
                viewBox="-3 -3 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                  stroke="#344054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Jan 6, 2022 - Jan 13, 2022
            </button>
            {/* Other filters */}
            <button className="flex items-center button py-[10px]">
              <svg
                width="20"
                height="14"
                viewBox="-3 -3 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M4 7H16M1 1H19M7 13H13"
                  stroke="#344054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>
        </div>
        {/* Projects */}
        <ProjectsList data={data} />
      </section>
    </main>
  );
};

export default Home;
