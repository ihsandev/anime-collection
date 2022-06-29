import withApollo from '@/configs/apolloClient'
import Detail from '@/containers/AnimeDetail'

const CollectionDetail = () => <Detail.Collection />

export default withApollo({ssr : true})(CollectionDetail);
