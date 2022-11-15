import { User } from './User'

export type Status = 'authenticated' | 'not-authenticated' | 'checking'

export interface AuthState {
  user: User | null
  authStatus: Status
  errorMessage: string | null
}
