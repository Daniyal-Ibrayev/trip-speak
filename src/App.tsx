import Layout from './components/Layout'
import { TranslatorCard } from './containers/TranslatorCard'
import { HistoryCard } from './containers/HistoryCard'
import { PopularPhrasesCard } from './containers/PopularPhrasesCard'

function App() {

  return (
    <Layout>
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 gap-4 pb-4">
        <TranslatorCard styles="md:col-span-1 md:row-span-2" />
        <TranslatorCard styles="md:col-span-1 md:row-span-2" />
        <HistoryCard styles="md:col-span-1 md:row-span-4" />
        <PopularPhrasesCard styles="md:col-span-2 md:row-span-2" />
      </div>
    </Layout >
  )
}

export default App;
