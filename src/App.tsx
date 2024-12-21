import Layout from './components/Layout'
import { TranslatorCard } from './containers/TranslatorCard'
import { HistoryCard } from './containers/HistoryCard'
import { PopularPhrasesCard } from './containers/PopularPhrasesCard'

function App() {

  return (
    <Layout>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        <TranslatorCard styles="col-span-2 row-span-2" />
        <PopularPhrasesCard styles="col-span-1 row-span-4" />
        <HistoryCard styles="col-span-2 row-span-2" />
      </div>

    </Layout >
  )
}

export default App;
