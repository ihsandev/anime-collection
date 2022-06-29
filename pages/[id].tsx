import withApollo from '@/configs/apolloClient'
import Detail from '@/containers/AnimeDetail'

const AnimeDetail = () => <Detail.List />;

export default withApollo({ssr : true})(AnimeDetail)
