import { Dialog, DialogPanel, type DialogProps } from "@headlessui/react";
import { cn } from "../lib/utils";

export default function ProjectModalContainer(props: DialogProps) {
  return (
    <Dialog
      {...props}
      transition
      className={cn(
        "fixed inset-0 w-screen overflow-y-auto px-4 py-12 bg-black/80",
        "transition duration-300 ease-out data-closed:opacity-0"
      )}
    >
      <div className="flex min-h-full items-center justify-center">
        <DialogPanel
          transition
          className={cn(
            "w-full max-w-3xl rounded-2xl bg-stone-900 p-6",
            "flex flex-col gap-4",
            "transition duration-300 ease-out data-closed:scale-95"
          )}
        >
          {props.children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
