import { ReactNode } from "react";

interface ILayoutBaseDePaginaProps {
    titulo: string;
    children?: ReactNode;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: <ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) {
    
}