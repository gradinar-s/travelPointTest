import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../App";
import styles from "./styles.module.css";
import { request } from "../../api/api";

const UserDetailsPage: FC = () => {
  const { id } = useParams();
  const { users } = useContext(UsersContext);

  const loadedUser = users?.find((u) => u.id === Number(id)) ?? null;

  const [user, setUser] = useState(loadedUser);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user === null) {
      const fetchData = async () => {
        setLoading(true);
        const data = await request(`users/${id}`);
        setLoading(false);

        if (!data.error) {
          setUser(data);
        } else {
          setError(data.error);
        }
      };

      fetchData();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user && error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.root}>
      <h1>Details</h1>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
      <div>{user?.website}</div>
      <hr />
      <div>
        {user?.address?.city}, {user?.address?.street}
      </div>
    </div>
  );
};

export default UserDetailsPage;
