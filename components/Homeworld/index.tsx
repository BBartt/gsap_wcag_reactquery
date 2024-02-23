import { getData } from "@/api/getData";
import { getId } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const Homeworld = ({ id }: { id: string }) => {
  const { error, data, isSuccess, isFetching, isError, isLoading } = useQuery({
    queryKey: ["homeworld", id],
    queryFn: () => getData<IPlanet>(`planets/${getId(id)}`),
    enabled: !!id,
  });

  return (
    <div className="homeworld">
      Ojczysta planeta: {isFetching && "Ładowanie..."}
      {isSuccess && !isLoading && data?.name ? data.name : "Brak danych"}
      {isError && error.message}
    </div>
  );
};

export default Homeworld;
