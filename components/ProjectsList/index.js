import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import Checkbox from "../Checkbox";
import ProjectRow from "../ProjectRow";

const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#F4F5F5"
      : state.isFocused
      ? "#F9FAFB"
      : "white",
    "&:active": {
      backgroundColor: "#F9FAFB",
    },
    color: "#344054",
    cursor: "pointer",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    outline: state.isFocused ? "2px solid #344054" : "none",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F9FAFB",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "fit-content",
  }),
  menuList: (provided) => ({
    ...provided,
    width: "max-content",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "8px 12px",
  }),
};

const ProjectsList = ({ data }) => {
  const [filteredProjects, setFilteredProjects] = useState(data);
  // Project sorting
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  // Project Filters
  const [projectTypeFilter, setProjectTypeFilter] = useState("All");
  const [projectStatusFilter, setProjectStatusFilter] = useState("All");
  // Custom select ref
  const customSelectTypeRef = useRef();
  const customSelectStatusRef = useRef();

  // Project filters
  useEffect(() => {
    filterProjects();
  }, [projectTypeFilter, projectStatusFilter]);

  // Filter projects
  const filterProjects = () => {
    let projects = data;
    const statusFilter = projectStatusFilter;
    const projectFilter = projectTypeFilter;

    // filter by status
    if (statusFilter !== "All") {
      projects = projects.filter((project) => project.status === statusFilter);
    }
    // filter by project type
    if (projectFilter !== "All") {
      projects = projects.filter((project) => project.type === projectFilter);
    }

    setFilteredProjects(projects);
  };

  // Clear filters
  const clearFilters = () => {
    customSelectTypeRef.current.selectOption({
      value: "All",
      label: "Status: All",
    });
    customSelectStatusRef.current.selectOption({
      value: "All",
      label: "Status: All",
    });

    setSortByDate(false);
    setSortByPrice(false);
    // Sort by id - default
    setFilteredProjects(data.sort((a, b) => a.id - b.id));
  };

  // Sort by date
  const sortProjectsByDate = () => {
    // Ascending
    if (sortByDate) {
      let sortedProjects = filteredProjects.sort(function compare(a, b) {
        return new Date(b.startDate) - new Date(a.startDate);
      });
      setFilteredProjects(sortedProjects);
      // Descending
    } else {
      let sortedProjects = filteredProjects.sort(function compare(a, b) {
        return new Date(a.startDate) - new Date(b.startDate);
      });
      setFilteredProjects(sortedProjects);
    }

    setSortByDate(!sortByDate);
  };

  // Sort by price
  const sortProjectsByPrice = () => {
    // Ascending
    if (sortByPrice) {
      let sortedProjects = filteredProjects.sort(
        (a, b) => b.closingPrice - a.closingPrice
      );
      setFilteredProjects(sortedProjects);
      // Descending
    } else {
      let sortedProjects = filteredProjects.sort(
        (a, b) => a.closingPrice - b.closingPrice
      );
      setFilteredProjects(sortedProjects);
    }

    setSortByPrice(!sortByPrice);
  };

  return (
    <section className="grayBorders shadow mx-2 mt-6">
      {/* Header */}
      <header className="flex justify-between items-center py-3 px-6">
        <h3 className="text-lg text-boldText font-semibold">Hired Projects</h3>
        {/* Filters */}
        <div className="flex mr-2">
          <div className="grayBorders mr-6 flex">
            {/* Clear filters */}
            <button
              onClick={clearFilters}
              className="py-2 px-3 text-darkGray text-sm font-semibold border-r border-[rgba(208,213,221,0.5)] active:bg-[#F9FAFB] hover:bg-[#F9FAFB]"
            >
              Clear Filters
            </button>
            {/* Status */}
            <Select
              className="w-fit text-darkGray text-sm font-semibold border-r border-[rgba(208,213,221,0.5)]"
              ref={customSelectStatusRef}
              onChange={(event) => {
                setProjectStatusFilter(event.value);
              }}
              blurInputOnSelect={true}
              options={[
                { value: "All", label: "Status: All" },
                { value: "Canceled", label: "Status: Canceled" },
                { value: "In Progress", label: "Status: In Progress" },
                { value: "Done", label: "Status: Done" },
                { value: "Success", label: "Status: Success" },
              ]}
              defaultValue={{ value: "All", label: "Status: All" }}
              isSearchable={false}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={customSelectStyles}
            />
            {/* Project */}
            <Select
              className="w-fit rounded-lg text-darkGray text-sm font-semibold border-r border-[rgba(208,213,221,0.5)]"
              ref={customSelectTypeRef}
              onChange={(event) => {
                setProjectTypeFilter(event.value);
              }}
              blurInputOnSelect={true}
              options={[
                { value: "All", label: "Status: All" },
                { value: "Mineral Mapping", label: "Project: Mineral Mapping" },
                { value: "Website", label: "Project: Website" },
              ]}
              defaultValue={{ value: "All", label: "Status: All" }}
              isSearchable={false}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              styles={customSelectStyles}
            />
          </div>
          {/* Options button */}
          <button>
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
        </div>
      </header>
      {/* Projects table */}
      <table className="w-full">
        {/* Head */}
        <thead className="bg-[#F9FAFB] border-t border-[rgba(208,213,221,0.5)] text-left">
          <tr>
            {/* Select project */}
            <th className="pl-6 relative">
              <Checkbox />
            </th>
            {/* Name */}
            <th className="py-4 2xl:px-5 pl-2 text-xs text-lightGray font-medium">
              Project Name
            </th>
            {/* Type */}
            <th className="py-4 2xl:px-5 text-xs text-lightGray font-medium">
              Type
            </th>
            {/* Price */}
            <th className="py-4 2xl:px-5 text-xs text-lightGray font-medium">
              <button
                onClick={sortProjectsByPrice}
                className="flex items-center"
              >
                Closing Price
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 ${sortByPrice ? "rotate-180" : ""}`}
                >
                  <path
                    d="M7.99998 3.33331V12.6666M7.99998 12.6666L12.6666 7.99998M7.99998 12.6666L3.33331 7.99998"
                    stroke="#101828"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </th>
            {/* Date */}
            <th className="py-4 2xl:px-5 text-xs text-lightGray font-medium">
              <button
                onClick={sortProjectsByDate}
                className="flex items-center"
              >
                Project Start
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 ${sortByDate ? "rotate-180" : ""}`}
                >
                  <path
                    d="M7.99998 3.33331V12.6666M7.99998 12.6666L12.6666 7.99998M7.99998 12.6666L3.33331 7.99998"
                    stroke="#101828"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </th>
            {/* Status */}
            <th className="py-4 2xl:px-5 text-xs text-lightGray font-medium">
              Status
            </th>
            {/* Last update */}
            <th className="py-4 2xl:px-5 text-xs text-lightGray font-medium">
              Last Update
            </th>
          </tr>
        </thead>
        {/* Body */}
        <tbody>
          {filteredProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
          {/* No projects found */}
          {!filteredProjects.length && (
            <tr className="border-t border-[#EAECF0]">
              <td className="py-4">
                <span className="pl-6 text-sm text-darkGray font-medium">
                  {" "}
                  No projects found
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-between items-center border-t border-[rgba(208,213,221,0.5)] py-3 px-6">
        <span className="text-sm text-darkGray font-medium">Page 1 of 10</span>
        <div>
          <button className="button mr-3">Previous</button>
          <button className="button">Next</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
