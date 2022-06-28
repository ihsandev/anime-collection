import withApollo from '@/configs/apolloClient'
import AnimeDetailContainer from '@/containers/AnimeDetail'

const AnimeDetail = () => <AnimeDetailContainer />

export default withApollo({ssr : true})(AnimeDetail)
