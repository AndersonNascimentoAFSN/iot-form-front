import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type LegacyRef, forwardRef } from 'react'

export function Dialog(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Dialog {...props} />
}

export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.DialogTrigger {...props} />
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
  return <DialogPrimitive.DialogClose {...props} />
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.DialogPortal {...props} />
}

export const DialogOverlay = forwardRef(
  (
    props: DialogPrimitive.DialogOverlayProps,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <DialogPrimitive.DialogOverlay
        ref={ref}
        {...props}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />
    )
  }
)

export function DialogContent(props: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.DialogContent
        {...props}
        className="fixed z-50 right-0 top-0 bottom-0 max-w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 p-8"
      />
    </DialogPortal>
  )
}

export function DialogTitle(props: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.DialogTitle {...props} className="text-lg font-semibold" />
  )
}

export function DialogDescription(
  props: DialogPrimitive.DialogDescriptionProps
) {
  return (
    <DialogPrimitive.DialogDescription
      {...props}
      className="text-zinc-400 text-sm leading-relaxed"
    />
  )
}
