import Badge from '@/components/Badge';
import Seo from '@/components/Seo';
import Layouts from '@/layouts';
import type { NextPage } from 'next'
import Image from 'next/image';
import { IAnimeDetail } from '../animeDetail.types';
import useAction from '../hooks/useAction';
import { 
  AnimeTypeStyled, CoverStyled, 
  DescriptionStyled, GenreStyled, 
  SubTitleStyled, TitleStyled 
} from '../styled';

const Collection: NextPage = () => {
  const { collection = {} } = useAction()
 
  const { 
    coverImage, title,description, type, 
    genres, episodes, status
  }: IAnimeDetail = collection;

  return (
    <>
      <Seo 
        title={`Collection | ${title?.english || ''}`}
        description={description}
      />
      <Layouts>
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
          </>
      </Layouts>
    </>
  )
}



export default Collection;
