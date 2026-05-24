import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type PageMessage = {
  title?: string;
  body: ReactNode;
};

type PageMessageContextValue = {
  message: PageMessage | null;
  setMessage: (message: PageMessage | null) => void;
  mobileExpanded: boolean;
  setMobileExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageMessageContext = createContext<PageMessageContextValue | null>(null);

export function PageMessageProvider({children}: {children: ReactNode}): ReactNode {
  const [message, setMessageState] = useState<PageMessage | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const setMessage = useCallback((next: PageMessage | null) => {
    setMessageState(next);
    if (!next) {
      setMobileExpanded(false);
    }
  }, []);

  const value = useMemo(
    () => ({message, setMessage, mobileExpanded, setMobileExpanded}),
    [message, setMessage, mobileExpanded],
  );

  return (
    <PageMessageContext.Provider value={value}>
      {children}
    </PageMessageContext.Provider>
  );
}

export function usePageMessageContext(): PageMessageContextValue {
  const context = useContext(PageMessageContext);
  if (!context) {
    throw new Error('usePageMessageContext must be used within PageMessageProvider');
  }
  return context;
}
