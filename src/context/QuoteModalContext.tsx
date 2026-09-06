"use client";

import React, { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

const RequestQuoteModal = dynamic(() => import("@/components/RequestQuoteModal"), { ssr: false });

export interface QuoteModalInitialData {
  defaultCategory?: string;
  defaultProductTitle?: string;
  defaultProductImage?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  initialData: QuoteModalInitialData;
  openQuoteModal: (data?: QuoteModalInitialData) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  initialData: {},
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<QuoteModalInitialData>({});

  const openQuoteModal = (data?: QuoteModalInitialData) => {
    setInitialData(data || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, initialData, openQuoteModal, closeQuoteModal }}
    >
      {children}
      {isOpen && <RequestQuoteModal />}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
