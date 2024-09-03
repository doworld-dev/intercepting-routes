"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleClose}></div>
      <div className={styles.modal}>
        <button className={styles.modalClose} onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </>
  );
};

export { Modal };
