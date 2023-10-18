import { UsersComponent } from "./UsersComponent";
import { useEffect } from "react";
import { fetchUsers } from "./duck/operations";
import { useDispatch, useSelector } from "react-redux";

export default function UsersContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer.users);
  const err = useSelector((state) => state.UsersReducer.err);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div id="users-container">
      <UsersComponent listOfUsers={users} err={err} />
    </div>
  );
}
