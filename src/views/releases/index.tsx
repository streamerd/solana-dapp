
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';

export const ReleasesView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-white mt-10 mb-8">
          My press releases
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <h3>My press releases</h3>
          {/* <SignMessage />
          <SendTransaction />
          <SendVersionedTransaction /> */}
        </div>
      </div>
    </div>
  );
};
