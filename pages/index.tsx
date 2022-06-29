import withApollo from '@/configs/apolloClient'
import Anime from '@/containers/AnimeList';

const Home = () => <Anime.List />

export default  withApollo({ssr : true})(Home);


