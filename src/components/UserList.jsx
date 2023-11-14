import SearchBar from "./SearchBar";
import UserListTable from "./UserListTable";

const UserList = () => {
  return (
    <section className="card users-container">
      <SearchBar />
      <UserListTable />

      {/* New user button  */}
     
    </section>
  );
};
export default UserList;
