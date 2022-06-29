import withApollo from '@/configs/apolloClient'
import Anime from '@/containers/AnimeList';

const Collection  = () => <Anime.Collection />

export default withApollo({ssr : true})(Collection);
