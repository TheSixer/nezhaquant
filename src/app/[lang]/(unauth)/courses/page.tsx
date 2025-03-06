import Main from '@/components/layout/Main'

import Banner from './Banner'
import Courses from './Content'

export default function CoursesPage() {
  return (
    <Main banner={<Banner />}>
      <Courses />
    </Main>
  )
}
