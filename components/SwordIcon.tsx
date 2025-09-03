import React from 'react';

interface SwordIconProps extends React.SVGProps<SVGSVGElement> {
  bladeClassName: string;
}

export const SwordIcon: React.FC<SwordIconProps> = ({ bladeClassName, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L10 16H14L12 2Z" className={bladeClassName} />
    <rect x="7" y="15" width="10" height="2" rx="1" fill="#9CA3AF" />
    <rect x="9" y="17" width="6" height="5" rx="1" fill="#6B7280" />
  </svg>
);