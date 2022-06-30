import Card from "@/components/Card";
import NotFound from "@/components/NotFound";
import Seo from "@/components/Seo";
import Layouts from "@/layouts";
import { IAnimeMedia } from "../animeList.types";
import useAction from "../hooks/useAction";
import { AnimeListStyled } from "../styled";

const Collection = () => {
  const { handleClickDetail, handleRemove, collections = [] } = useAction()
  const renderCollection = (
    <>
      {collections?.length > 0 ?
        collections?.map((item: IAnimeMedia, i:number) => (
          <Card
            key={i}
            title={item?.title?.english}
            image={item?.bannerImage}
            sizeImg={200}
            onClick={() => handleClickDetail(item?.id, 'collection')}
            onBtnAction={() => handleRemove(item?.id)}
            actionType='delete'
          />
        )) : (
         <>
          <NotFound />
         </> 
        )
      }
    </>
  )
  return (
    <>
      <Seo 
        title="Collection List"
        description="All Collection List"
      />
      <Layouts>
        <h1>Collection</h1>
        <AnimeListStyled>
          {renderCollection}
        </AnimeListStyled>
      </Layouts>
    </>
  )
}

export default Collection;
