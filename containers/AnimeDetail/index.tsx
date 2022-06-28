import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Skeleton from '@/components/Skeleton';
import Layouts from '@/layouts';
import type { NextPage } from 'next'
import Image from 'next/image';
import { IAnimeDetail } from './animeDetail.types';
import useAction from './hooks/useAction';
import { AnimeTypeStyled, CoverStyled, DescriptionStyled, GenreStyled, SubTitleStyled, TitleStyled } from './styled';

const AnimeDetail: NextPage = () => {
  const { animeDetail = {}, loading } = useAction()
  const { coverImage, title, description, type, genres, episodes, status }: IAnimeDetail = animeDetail;

  return (
    <Layouts>
      {!loading ? (
        <>
          <TitleStyled color={coverImage?.color}>
            {title?.english || 'No Title'}
          </TitleStyled>
          <CoverStyled color={coverImage?.color}>
            <Image
              src={coverImage?.extraLarge || 'http://placehold.jp/200x200.png'}
              width='100%'
              height={500}
              objectFit='cover'
            />
            <AnimeTypeStyled color={coverImage?.color}>
              {type}
            </AnimeTypeStyled>
          </CoverStyled>
          <SubTitleStyled color={coverImage?.color}>
            <p>Episodes: <span>{episodes}</span></p>
            <p>Status: <span>{status}</span></p>
          </SubTitleStyled>
          <GenreStyled>
            {genres?.map((genre, i) => (
              <Badge key={i} title={genre} />
            ))}
          </GenreStyled>
          <DescriptionStyled 
            dangerouslySetInnerHTML={{__html: description}}
          />
          <Button.BookmarkFloat />
        </>
      ) : (
        <div>
          <Skeleton.Box />
          <Skeleton.Box height={400} width='100%' />
          <Skeleton.Box />
          {[...new Array(14)].map((_, i) => (
            <Skeleton.Box key={i} width='100%' />
          ))}
        </div>
      )}
    </Layouts>
  )
}



export default AnimeDetail;
