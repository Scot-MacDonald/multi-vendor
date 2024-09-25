"use client";

import { Button, Modal, Select } from "flowbite-react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}

      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1 text-black dark:text-white bg-white dark:bg-[#252525]  dark:hover:bg-[#252525]  "
      >
        {/* <HelpCircle size={14} strokeWidth={2} /> */}
        <span className="text-[1rem] border-r border-black dark:border-[#666666] px-5 py-2 ">
          Help
        </span>
      </button>
      <Modal
        className=""
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          Need Help with Shopping, Talk to our Help Desk
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="tel:2567833663"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span>Call: 07880994646</span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span>Track your Order</span>
            </Link>
            <Link
              href="tel:2567833663"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span>Returns and Refunds</span>
            </Link>
            <Link
              href="tel:2567833663"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span>Chat with Us</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
