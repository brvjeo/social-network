import React, { createContext, type FC, type PropsWithChildren } from 'react';
import { type Theme } from '../../types';

interface SVGProperties {
  color: string
}

interface ContextType { theme: Theme, toggle: () => void, svg: SVGProperties }

const value: ContextType = {
	theme: 'light',
	toggle: () => undefined,
	svg: {
		color: '#AEB6BF'
	}
};

export const ColorContext = createContext<ContextType>(value);

export const ColorProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};
