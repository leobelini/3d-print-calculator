import { Dexie, type EntityTable } from 'dexie'

interface Setting {
  id: number
  name: string
  sessionName: string
  values: Record<string, any>
}

interface Project {
  id?: number
  name: string
  settings: Record<string, any>
}

const db = new Dexie('3d-print-calculator') as Dexie & {
  settings: EntityTable<Setting, 'id'>
  projects: EntityTable<Project, 'id'>
}

db.version(1).stores({
  settings: '++id, name, sessionName, values',
  projects: '++id, name, settings',
})

export type { Setting, Project }
export { db }
