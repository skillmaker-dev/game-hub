import useGenres from "./useGenres";

const useGenre = (selectedGenreId?: number ) => {
    const { data } = useGenres();
    const genre = data?.results.find((p) => p.id === selectedGenreId);

    return genre
}

export default useGenre;