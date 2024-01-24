import BellIcon from "../assets/BellIcon";
import Avatar from "./Avatar";

type Props = {
  title: string;
};
const DashboardHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[24px]  font-bold">{title}</h1>

      <div className="flex items-center gap-6">
        <BellIcon />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
