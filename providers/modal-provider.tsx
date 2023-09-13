"use client";

import StoreModal from "@/components/ui/modals/store-modal";
import { useEffect, useState } from "react";

type Props = {};

export const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
