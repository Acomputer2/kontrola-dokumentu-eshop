import { ReactNode } from 'react';

interface ScreenReaderOnlyProps {
  children: ReactNode;
  className?: string;
}

const ScreenReaderOnly: React.FC<ScreenReaderOnlyProps> = ({
  children,
  className = '',
}) => {
  return (
    <span className={`sr-only ${className}`}>
      {children}
    </span>
  );
};

export default ScreenReaderOnly;
