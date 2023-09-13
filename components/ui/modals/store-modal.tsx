"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../modal";

type Props = {};

const StoreModal = (props: Props) => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title='Create Store'
      description='Add a new store to manage products and categories'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      store-modal form
    </Modal>
  );
};

export default StoreModal;
