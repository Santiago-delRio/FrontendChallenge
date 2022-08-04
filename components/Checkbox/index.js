const Checkbox = () => {
  return (
    <>
      <input type="checkbox" className="customCheckbox" />
      <div className="absolute flex justify-center items-center pointer-events-none top-1/2 translate-y-[-50%] w-5 h-5 rounded-[6px] border border-bordersGray">
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden pointer-events-none"
        >
          <path
            d="M10.6667 1.5L4.25001 7.91667L1.33334 5"
            stroke="#1570EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Checkbox;
