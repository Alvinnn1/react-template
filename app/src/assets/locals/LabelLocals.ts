import { Formatter, Locals } from '@imf/typelocals'

export interface LabelLocals extends Record<string, string | Formatter> {
  'login-toast': (name: string) => string
  profile: string
}
