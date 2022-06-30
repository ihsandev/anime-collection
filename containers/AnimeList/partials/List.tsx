import Card from "@/components/Card";
import Seo from "@/components/Seo";
import Skeleton from "@/components/Skeleton";
import Layouts from "@/layouts";
import { IAnimeMedia } from "../animeList.types";
import useAction from "../hooks/useAction";
import { AnimeListStyled } from "../styled";

const List = () => {
  const { animeList = [], loading, handleClickDetail } = useAction()

  const renderList = (
    <>
      {animeList?.length > 0 ? 
        animeList?.map((item: IAnimeMedia, i:number) => (
        <Card
          key={i}
          title={item?.title?.english}
          image={item?.bannerImage}
          sizeImg={200}
          onClick={() => handleClickDetail(item?.id)}
        />
      )) : (
        <div>
          {[...new Array(4)].map((_, i) => (
          <div key={i}>
            <Skeleton.Box height={150} width='100%' mb='0.5rem' />
            <Skeleton.Box width='100%' />
          </div> 
          ))}
        </div>
      )}
    </>
  )

  const newLoading = (
    Boolean(loading) || animeList?.length === 0
  ).toString();

  return (
    <>
      <Seo 
        title="Anime List"
        description="All Anime List"
      />
      <Layouts>
        <h1>Anime List</h1>
        <AnimeListStyled 
          loading={newLoading}
        >
          {renderList}
        </AnimeListStyled>
        {loading && (
          <>
            <Skeleton.Box height={150} width='100%' mb='0.5rem' />
            <Skeleton.Box width='100%' />
          </>
        )}
      </Layouts>
    </>
  )
}

export default List;
