// Next, React
import { FC, useEffect, useState } from "react";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useGateway } from "@civic/solana-gateway-react";

// Components
// import { RequestAirdrop } from "../../components/RequestAirdrop";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  // const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const { requestGatewayToken } = useGateway();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="mt-20">
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-white mb-4">
          Just Let The Music Play
          </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>"A peer 2 peer Musician’s Electronic Press Pack"</p>

        </h4>

        {/* <div className="flex flex-col mt-2">
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
            {wallet && (
              <div className="flex flex-row justify-center">
            
                <button
                  style={{
                    backgroundColor: "black",
                    border: "3px white solid",
                    borderRadius: "2rem",
                    padding: "8px",
                  }}
                  onClick={requestGatewayToken}
                >
                  Civic Pass
                </button>
              </div>
            )}
          </h4>
        </div> */}
      </div>
    </div>
  );
};
