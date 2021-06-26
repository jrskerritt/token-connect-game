import './Layout.scss';

export interface LayoutProps {
  children: JSX.Element[];
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return <div className="layout">{children}</div>;
}
