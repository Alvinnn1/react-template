import { Formatter } from '@imf/typelocals'

export interface SegmentLocals extends Record<string, string | Formatter> {
  in: string
}
