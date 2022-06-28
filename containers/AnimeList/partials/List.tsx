import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import { useRouter } from "next/router";
import { IAnimeMedia, IList } from "../animeList.types";

const List = ({animeList = [], loading}: IList) => {
  const { push } = useRouter()
  const handleClickDetail = (id:number) => {
    push(`/${id}`)
  }
  return (
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
