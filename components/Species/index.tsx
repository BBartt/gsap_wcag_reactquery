import { getData } from "@/api/getData";
import { useQuery } from "@tanstack/react-query";

const Species = ({ id }: { id: string }) => {
  const { error, data, isSuccess, isFetching, isError, isLoading } = useQuery({
    queryKey: ["species", id],
    queryFn: () => getData<ISpecies>(`species/${id}`),
    enabled: !!id,
  });

  return (
    <div className="species">
      Gatunek: {isFetching && "Ładowanie..."}
      {isSuccess && !isLoading && data?.name ? data.name : "Brak danych"}
      {isError && error.message}
    </div>
  );
};

export default Species;
