import { ReactNode } from 'react';

interface PeachBackgroundProps {
  children?: ReactNode;
}

const PeachBackground = ({ children }: PeachBackgroundProps) => (
  <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#ffe5b4' }}>
    {children}
  </div>
);

export default PeachBackground;
