import { CharacterItemInfoSkeleton, Name, Detail } from './CharacterItemSkeleton.styled';

export const CharacterItemSkeleton = () => {
  return (
    <CharacterItemInfoSkeleton>
      <Name />
      <Detail />
      <Detail />
      <Detail />
    </CharacterItemInfoSkeleton>
  );
};
