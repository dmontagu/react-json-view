import { FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';

const JsonPathContext = createContext<(string | number)[]>([]);

export const useJsonPath = () => {
  return useContext(JsonPathContext);
};

export const JsonPathComponent: FC<PropsWithChildren<{ component: string | number }>> = ({ component, children }) => {
  const jsonPath = useJsonPath();
  return <JsonPathContext.Provider value={[...jsonPath, component]}>{children}</JsonPathContext.Provider>;
};
