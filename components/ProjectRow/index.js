import Checkbox from "../Checkbox";

const ProjectRow = ({ project }) => {
  const date = new Date(project.startDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: 'UTC'
  });

  return (
    project && (
      <tr className="border-t border-[#EAECF0]">
        <td className="pl-6 relative">
          <Checkbox />
        </td>
        {/* Project name */}
        <td className="py-4 px-1 2xl:px-5 pl-2 text-sm text-lightGray">
          <ul>
            <li className="text-darkGray font-semibold">{project.name}</li>
            <li className="">{project.company}</li>
          </ul>
        </td>
        {/* Type */}
        <td className="py-4 px-1 2xl:px-5 text-sm text-lightGray">{project.type}</td>
        {/* Closing price */}
        <td className="py-4 px-1 2xl:px-5 text-sm text-lightGray">
          ${project.closingPrice.toLocaleString("en-US")}
        </td>
        {/* Project start */}
        <td className="py-4 px-1 2xl:px-5 text-sm text-lightGray">{date}</td>
        {/* Status */}
        <td
          className={`
            py-4 px-1 2xl:px-5 text-xs font-medium
        `}
        >
          <div
            className={`
                flex items-center py-[2px] px-2 rounded-full w-fit
                ${
                  project.status === "Canceled"
                    ? "bg-[#FEF3F2] text-[#B42318]"
                    : project.status === "In Progress"
                    ? "bg-[#FEFBE8] text-[#A15C07]"
                    : "bg-backgroundGreen text-darkGreen"
                }
          `}
          >
            <span
              className={`
                inline-block w-[6px] h-[6px] rounded-full mr-2 
                ${
                  project.status === "Canceled"
                    ? "bg-[#F04438]"
                    : project.status === "In Progress"
                    ? "bg-[#EAAA08]"
                    : "bg-lightGreen"
                }
              `}
            ></span>
            {project.status}
          </div>
        </td>
        {/* Last update */}
        <td className="py-4 px-1 2xl:px-5 text-sm text-lightGray">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-8 h-8 rounded-full mr-3 bg-gray-300"
              width="32"
              height="32"
              src={project.lastUpdate.avatar}
              alt="Account avatar"
            />
            <ul className="">
              <li className="text-sm text-darkGray font-semibold">
                {project.lastUpdate.name}
              </li>
              <li className="text-sm text-lightGray font-normal">
                {project.lastUpdate.email}
              </li>
            </ul>
          </div>
        </td>
      </tr>
    )
  );
};

export default ProjectRow;
