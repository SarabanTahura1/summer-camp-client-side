import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAddedClass = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://language-server.up.railway.app/classes?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [classes, refetch];
};

export default useAddedClass;
