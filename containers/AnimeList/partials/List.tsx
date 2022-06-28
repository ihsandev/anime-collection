import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import { IAnimeMedia, IList } from "../animeList.types";

const List = ({animeList = [], loading}: IList) => {
  return (
    <>
      {animeList?.length > 0 ? 
        animeList?.map((item: IAnimeMedia, i:number) => (
        <Card
          key={i}
          title={item?.title?.english}
          image={item?.bannerImage}
          sizeImg={200}
        />
      )) : (
        <>
          <Skeleton.Box height={150} width='100%' mb='0.5rem' />
          <Skeleton.Box width='100%' />
          <Skeleton.Box height={150} width='100%' mb='0.5rem' />
          <Skeleton.Box width='100%' />
          <Skeleton.Box height={150} width='100%' mb='0.5rem' />
          <Skeleton.Box width='100%' />
        </>
      )}
      {loading && (
        <>
          <Skeleton.Box height={150} width='100%' mb='0.5rem' />
          <Skeleton.Box width='100%' />
        </>
      )}
    </>
  )
}

export default List;
