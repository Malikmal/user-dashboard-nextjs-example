"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface LeftSheetProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: ReactNode;
}

export default function LeftSheet(props: LeftSheetProps) {
  const { isOpen, setIsOpen, children } = props;
  return (
    <Transition unmount={false} as={Fragment} show={isOpen}>
      <Dialog
        // open={isOpen}
        unmount={false}
        className="relative z-50 lg:hidden"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          unmount={false}
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            unmount={false}
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-[100vw_-_72px] flex-1 flex-row-reverse">
              <Transition.Child
                unmount={false}
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="left-full top-0 h-full w-16 justify-center cursor-pointer"
                  onClick={() => setIsOpen(false)}
                ></div>
              </Transition.Child>
              <div className="w-[calc(100vw - 72px)] flex grow flex-col gap-y-5 overflow-y-auto bg-white text-left">
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
