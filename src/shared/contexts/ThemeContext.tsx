interface IappThemeProviderProps {
    children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
}