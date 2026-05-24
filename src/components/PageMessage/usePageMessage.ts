import {useEffect, type ReactNode} from 'react';
import {usePageMessageContext} from './PageMessageContext';

type UsePageMessageOptions = {
  enabled: boolean;
  title?: string;
  body: ReactNode;
};

export function usePageMessage({
  enabled,
  title,
  body,
}: UsePageMessageOptions): void {
  const {setMessage, setMobileExpanded} = usePageMessageContext();

  useEffect(() => {
    if (!enabled) {
      setMessage(null);
      return undefined;
    }

    setMessage({title, body});

    return () => {
      setMessage(null);
      setMobileExpanded(false);
    };
  }, [enabled, title, body, setMessage, setMobileExpanded]);
}
