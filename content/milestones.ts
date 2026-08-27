export type Milestone = {
  id: string
  date: string
  title: string
  description?: string
  achieved: boolean
}

export const milestones: Milestone[] = [
  {
    id: 'scaffold',
    date: '2026-08-26',
    title: 'Journal scaffold live',
    description: 'Home, blog, and deploy path standing up on GitHub Pages.',
    achieved: true,
  },
  {
    id: 'first-month',
    date: '2026-09-26',
    title: 'Four weekly posts',
    description: 'A full month of writing in the journal.',
    achieved: false,
  },
  {
    id: 'year-one',
    date: '2027-08-26',
    title: 'One year of practice',
    description: 'Fifty-two weeks of showing up on the page.',
    achieved: false,
  },
]
