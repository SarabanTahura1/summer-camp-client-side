import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useLoadBookedData = () => {
  const { user } = useContext(AuthContext);
  const { data: booked = [], refetch } = useQuery({
    queryKey: ["booked", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://language-server.up.railway.app/booked?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [booked, refetch];
};

export default useLoadBookedData;
