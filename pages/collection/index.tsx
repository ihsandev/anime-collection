import AnimeList from '@/containers/AnimeList'
import withApollo from '@/configs/apolloClient'

const Collection = () => <AnimeList type='collection' />

export default withApollo({ssr : true})(Collection);