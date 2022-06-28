import withApollo from '@/configs/apolloClient'
import AnimeList from '@/containers/AnimeList';

const Home = () => <AnimeList />

export default  withApollo({ssr : true})(Home);


