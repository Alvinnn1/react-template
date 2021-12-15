import {LabelLocals} from "@/assets/locals/LabelLocals";
import {ErrorLocals} from "@/assets/locals/ErrorLocals";
import {SegmentLocals} from "@/assets/locals/SegmentLocals";

declare module '@imf/typelocals' {
    export interface Locals {
        label: LabelLocals
        error: ErrorLocals
        segment: SegmentLocals
    }
}



