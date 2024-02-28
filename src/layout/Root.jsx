import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
