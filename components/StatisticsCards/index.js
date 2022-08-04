const StatisticsCards = ({ statName, statValue, statPercentage }) => {
  return (
    <div className="rounded-lg p-6 bg-white shadow">
      {/* Header */}
      <header className="flex justify-between">
        {/* Statistic name*/}
        <span className="text-lightGray text-sm font-medium">{statName}</span>
        {/* Settings button */}
        <button className="mr-2">
          <svg
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.33333 8.8335C2.79357 8.8335 3.16667 8.4604 3.16667 8.00016C3.16667 7.53992 2.79357 7.16683 2.33333 7.16683C1.8731 7.16683 1.5 7.53992 1.5 8.00016C1.5 8.4604 1.8731 8.8335 2.33333 8.8335Z"
              stroke="#98A2B3"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33333 3.00016C2.79357 3.00016 3.16667 2.62707 3.16667 2.16683C3.16667 1.70659 2.79357 1.3335 2.33333 1.3335C1.8731 1.3335 1.5 1.70659 1.5 2.16683C1.5 2.62707 1.8731 3.00016 2.33333 3.00016Z"
              stroke="#98A2B3"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33333 14.6668C2.79357 14.6668 3.16667 14.2937 3.16667 13.8335C3.16667 13.3733 2.79357 13.0002 2.33333 13.0002C1.8731 13.0002 1.5 13.3733 1.5 13.8335C1.5 14.2937 1.8731 14.6668 2.33333 14.6668Z"
              stroke="#98A2B3"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>
      {/* Data */}
      <div className="flex justify-between items-center mt-3">
        {/* Statistic value */}
        <h1 className="text-boldText text-4xl font-semibold">{statValue}</h1>
        {/* Statistic percentage */}
        <span className="flex items-center text-sm text-darkGreen py-[2px] px-2 bg-backgroundGreen rounded-full font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-lightGreen mr-[2px]"
            width="16"
            height="16"
            viewBox="-5 -5 33 33"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          {statPercentage}%
        </span>
      </div>
    </div>
  );
};

export default StatisticsCards;
