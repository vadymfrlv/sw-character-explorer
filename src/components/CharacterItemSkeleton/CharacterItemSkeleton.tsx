import {
  CharacterListSkeleton,
  CharacterItemInfoSkeleton,
  Name,
  Detail,
} from './CharacterItemSkeleton.styled';

interface CharacterItemSkeletonProps {
  cards: number;
}

export const CharacterItemSkeleton = ({ cards }: CharacterItemSkeletonProps) => {
  return (
    <CharacterListSkeleton>
      {Array(cards)
        .fill(0)
        .map((_, idx) => (
          <CharacterItemInfoSkeleton key={idx}>
            <Name />
            <Detail />
            <Detail />
            <Detail />
          </CharacterItemInfoSkeleton>
        ))}
    </CharacterListSkeleton>
  );
};
