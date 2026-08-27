export type GoalStatus = 'not-started' | 'in-progress' | 'done'

export type Goal = {
  id: string
  title: string
  description?: string
  status: GoalStatus
}

export const goals: Goal[] = [
  {
    id: 'write-weekly',
    title: 'Write every week',
    description: 'Ship one journal post each week for the year.',
    status: 'in-progress',
  },
  {
    id: 'name-focus',
    title: 'Name the first focus',
    description: 'Pick one concrete area to grow into and say it out loud here.',
    status: 'in-progress',
  },
  {
    id: 'review-quarterly',
    title: 'Quarterly review',
    description: 'Look back at goals and milestones every three months.',
    status: 'not-started',
  },
]
