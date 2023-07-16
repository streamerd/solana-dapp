import create, { State } from "zustand";
import produce from "immer";
import { getProjects } from "utils/underdog-ops";

interface ProjectStore extends State {
  projects: Array<{
    id: number;
    name: string;
    description?: string;
    image: string;
    txid?: string;
    mintAddress: string;
    transferrable?: boolean;
    compressed?: boolean;
    semifungable?: boolean;
    status: string;
  }>;
  set: (x: any) => void;
}

// const projects =  getProjects();
const useProjectStore = create<ProjectStore>((set, _get) => ({
  projects: [],
  set: (fn)=> set(produce(fn)),
}));

export default useProjectStore;
