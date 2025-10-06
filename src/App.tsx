import TopNav from './components/TopNav'
import StoreHeader from './components/StoreHeader'
import Banner from './components/Banner'
import TabsRow from './components/TabsRow'
import CollectionsGrid from './components/CollectionsGrid'
import Sidebar from './components/Sidebar'
import BookCTA from './components/BookCTA'

function App() {

  return (
    <>
      <TopNav />

      {/* Main content container */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <StoreHeader />

        <Banner />

        <TabsRow />

        {/* Content grid */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          {/* Left: collections */}
          <div className="col-span-12 lg:col-span-8">
            <CollectionsGrid />

            <div className="mt-8">
              <div className="text-base font-semibold text-gray-900">Products</div>
              <div className="mt-2 h-24 rounded-md border bg-gray-50 flex items-center justify-center text-gray-400 text-sm">Products grid placeholder</div>
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <Sidebar />
            <BookCTA />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
