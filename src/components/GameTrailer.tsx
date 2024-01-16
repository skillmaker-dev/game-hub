import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, error, isLoading } = useTrailers(gameId);
  const firstVideo = trailer?.results ? trailer?.results[0] : undefined;
  if (!firstVideo) return null;
  if (isLoading) return null;
  if (error) throw error;

  return (
    <video
      controls
      src={trailer?.results[0]?.data["max"]}
      poster={trailer?.results[0]?.preview}
    />
  );
};

export default GameTrailer;
