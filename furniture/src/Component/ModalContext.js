import { useRef, useState, useContext, createContext } from 'react';

export const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const SetChairFunc = useRef(() => {});
  const SetTableFunc = useRef(() => {});

  const [currentMode, setCurrentMode] = useState('');

  const vals = {
    SetChairFunc,
    SetTableFunc,
    currentMode,
    setCurrentMode,
  };

  return <ModalContext.Provider value={vals}>{children}</ModalContext.Provider>;
};
