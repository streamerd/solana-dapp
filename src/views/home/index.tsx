// Next, React
import { FC, useEffect, useState, useMemo } from "react";
import { mintNFT, createProject, getProjects } from "utils/underdog-ops";
// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useGateway } from "@civic/solana-gateway-react";

// import api from "api";
import axios from "axios";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";
import ProjectList from "components/Project";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div>
          {" "}
          <div className="grid grid-cols-2 gap-20">
            {" "}
            <button className="text-white p-4 rounded bg-indigo-500 shadow-md flex items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />{" "}
              </svg>{" "}
              Feed{" "}
            </button>{" "}
            <button className="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />{" "}
              </svg>{" "}
              Profile{" "}
            </button>{" "}
          </div>{" "}
          <div className="shadow-xl border border-red-100 font-light p-8 rounded text-gray-500 bg-white mt-6">
            {" "}
            Your accomplishments:
            {/* <ProjectList /> */}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
