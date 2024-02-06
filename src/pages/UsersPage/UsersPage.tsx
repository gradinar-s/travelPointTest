import { FC, useContext, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { request } from "../../api/api";
import { Context, UsersContext } from "../../App";

const UsersPage: FC = () => {
  const { users, setUsers } = useContext<Context>(UsersContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await request("users");
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      {users?.map((u) => (
        <Link key={u.id} className={styles.user} to={`/user/${u.id}`}>
          <div>{u.name}</div>
          <div>{u.phone}</div>
          <div>{u.email}</div>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
