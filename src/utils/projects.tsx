import useProjectStore from "../stores/useProjectStore";

export function display(newProject: {
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
}) {
  const {
    projects,
    set: setProjectStore,
  } = useProjectStore.getState()

  setProjectStore((state: { notifications: any[] }) => {
    state.notifications = [
      ...projects,
      { status: 'confirmed', ...newProject },
    ]
  })
}
