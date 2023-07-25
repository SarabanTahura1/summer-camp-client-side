import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useLoadSpecificUser = () => {
  const { user } = useContext(AuthContext);
  const { data: userData = [] } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://language-server.up.railway.app/userData?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [userData];
};

export default useLoadSpecificUser;
