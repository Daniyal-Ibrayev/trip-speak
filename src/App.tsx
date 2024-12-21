import Layout from './components/Layout'
import { TranslatorCard } from './containers/TranslatorCard'
import { HistoryCard } from './containers/HistoryCard'
import { PopularPhrasesCard } from './containers/PopularPhrasesCard'

function App() {

  return (
    <Layout>
      <TranslatorCard />
      <HistoryCard />
      <PopularPhrasesCard />
    </Layout>
  )
}

export default App;
