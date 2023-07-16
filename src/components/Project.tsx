import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { useConnection } from "@solana/wallet-adapter-react";
import { getExplorerUrl } from "../utils/explorer";
import { useNetworkConfiguration } from "contexts/NetworkConfigurationProvider";
import useProjectStore from "../stores/useProjectStore";
import { getProjects } from "utils/underdog-ops";

const ProjectList = async () => {
  const { projects, set: setProjectStore } = useProjectStore((s) => s);

const allProjects = await getProjects()
  setProjectStore( (state: any) => {
    state.projects =  allProjects;
  });

  return (
    <div
      className={`z-20 fixed inset-20 flex items-end px-4 py-6 pointer-events-none sm:p-6`}
    >
      <div className={`flex flex-row w-full`}>
        {/* {typeof projects} */}
        {projects.map((p, idx) => (
          <Project
            key={`${p.id}${idx}`}
            id={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
};

const Project = ({ id, name, description, image }) => {
  return (
    <div
      className={`max-w-sm w-full bg-bkg-1 shadow-lg rounded-md mt-2 pointer-events-auto ring-1 ring-black ring-opacity-5 p-2 mx-4 mb-12 overflow-hidden`}
    >
      {id}
      {name}
      {description}
      {image}
    </div>
  );
};

export default ProjectList;
