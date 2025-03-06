import Main from '@/components/Layout/Main'

import Banner from './Banner'
import Cooperate from './Content'

export default function CooperatePage() {
  return (
    <Main banner={<Banner />}>
      <Cooperate />
    </Main>
  )
}
