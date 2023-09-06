import { ReactNode } from 'react';
import { styled } from 'styled-components';

function Layout({ children }: { children: ReactNode }) {
  return <LayoutWrap>{children}</LayoutWrap>;
}

export default Layout;

const LayoutWrap = styled.div``;
