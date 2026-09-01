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
    description: 'Write at least one journal post each week.',
    status: 'in-progress',
  },
]
