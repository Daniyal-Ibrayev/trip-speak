import Layout from './components/Layout';
import { HistoryCard } from './containers/HistoryCard';
import { PopularPhrasesCard } from './containers/PopularPhrasesCard';
import { TranslatorCardFrom } from './containers/TranslatorCardFrom';
import { TranslatorCardTo } from './containers/TranslatorCardTo';

function App() {

  return (
    <Layout>
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 gap-4 pb-4">
        <TranslatorCardFrom styles="md:col-span-1 md:row-span-2" />
        <TranslatorCardTo styles="md:col-span-1 md:row-span-2" />
        <HistoryCard styles="md:col-span-1 md:row-span-4" />
        <PopularPhrasesCard styles="md:col-span-2 md:row-span-2" />
      </div>
    </Layout >
  )
}

export default App;
