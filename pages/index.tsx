import NavBar from "../src/main_app/components/NavBar";
import CreateUser from "../src/users/components/CreateUser";
import ViewAllUsers from "../src/users/components/ViewAllUsers";

export default function Home() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <NavBar />
      <div className="my-2 border border-gray-300 w-full" />
      <ViewAllUsers />
      <div className="my-2 border border-gray-300 w-full" />
      <CreateUser />
    </div>
  )
}