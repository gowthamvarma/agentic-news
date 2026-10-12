import React from 'react';
import { User } from 'lucide-react';

interface UserAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  initials?: string;
}

const sizeConfig = {
  xs: { container: 'w-7 h-7', iconSize: 14, text: 'text-[10px]' },
  sm: { container: 'w-9 h-9', iconSize: 17, text: 'text-xs' },
  md: { container: 'w-11 h-11', iconSize: 20, text: 'text-sm' },
  lg: { container: 'w-14 h-14', iconSize: 24, text: 'text-base' },
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  size = 'md',
  className = '',
  initials = 'YOU',
}) => {
  const currentSize = sizeConfig[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <div
        className={`${currentSize.container} rounded-2xl flex items-center justify-center font-bold tracking-wider border border-primary/30 bg-gradient-to-tr from-neutral/90 via-neutral/70 to-primary/30 text-neutral-content shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105`}
      >
        {initials ? (
          <span className={`font-mono font-semibold ${currentSize.text} text-primary-content/90`}>
            {initials}
          </span>
        ) : (
          <User size={currentSize.iconSize} className="opacity-90" />
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
