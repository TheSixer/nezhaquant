import Main from '@/components/Layout/Main'

import Banner from './home/Banner'
import Home from './home/Content'

export default function HomePage() {
  return (
    <Main banner={<Banner />}>
      <Home />
    </Main>
  )
}
