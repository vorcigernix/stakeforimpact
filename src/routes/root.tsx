import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Outlet />
    </div>
  );
}
