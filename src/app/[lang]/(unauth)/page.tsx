import Main from '@/components/layout/Main'

import Banner from './home/Banner'
import Home from './home/Content'

export default function HomePage() {
  return (
    <Main banner={<Banner />}>
      <Home />
    </Main>
  )
}
