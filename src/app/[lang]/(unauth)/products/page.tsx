import Main from '@/components/layout/Main'

import Banner from './Banner'
import Products from './Content'

export default function ProductsPage() {
  return (
    <Main banner={<Banner />}>
      <Products />
    </Main>
  )
}
