import React from 'react';

export type RobotAvatarVariant = 'primary' | 'pro' | 'con' | 'neutral' | 'accent';
export type RobotAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface RobotAvatarProps {
  size?: RobotAvatarSize;
  isThinking?: boolean;
  status?: 'online' | 'busy' | 'offline' | 'none';
  variant?: RobotAvatarVariant;
  showStatusIndicator?: boolean;
  className?: string;
  glow?: boolean;
}

const sizeConfig: Record<RobotAvatarSize, {
  container: string;
  badge: string;
  svgSize: number;
  glowSpread: string;
}> = {
  xs: { container: 'w-7 h-7', badge: 'w-2 h-2 -bottom-0.5 -right-0.5 ring-1', svgSize: 20, glowSpread: 'shadow-xs' },
  sm: { container: 'w-9 h-9', badge: 'w-2.5 h-2.5 bottom-0 right-0 ring-1.5', svgSize: 26, glowSpread: 'shadow-sm' },
  md: { container: 'w-11 h-11', badge: 'w-3 h-3 bottom-0 right-0 ring-2', svgSize: 32, glowSpread: 'shadow-md' },
  lg: { container: 'w-14 h-14', badge: 'w-3.5 h-3.5 bottom-0.5 right-0.5 ring-2', svgSize: 40, glowSpread: 'shadow-lg' },
  xl: { container: 'w-16 h-16', badge: 'w-4 h-4 bottom-1 right-1 ring-2', svgSize: 48, glowSpread: 'shadow-xl' },
};

const variantConfig: Record<RobotAvatarVariant, {
  border: string;
  gradientBg: string;
  accentColor: string;
  glowColor: string;
  antennaColor: string;
  visorBg: string;
  eyeColor: string;
}> = {
  primary: {
    border: 'border-primary/50',
    gradientBg: 'from-primary/20 via-primary/10 to-base-300/80',
    accentColor: '#38bdf8', // sky-400
    glowColor: 'shadow-primary/30',
    antennaColor: '#60a5fa',
    visorBg: '#0f172a',
    eyeColor: '#38bdf8',
  },
  accent: {
    border: 'border-secondary/50',
    gradientBg: 'from-secondary/25 via-secondary/10 to-base-300/80',
    accentColor: '#c084fc', // purple-400
    glowColor: 'shadow-secondary/30',
    antennaColor: '#e879f9',
    visorBg: '#1e1b4b',
    eyeColor: '#c084fc',
  },
  pro: {
    border: 'border-info/50',
    gradientBg: 'from-info/25 via-info/10 to-base-300/80',
    accentColor: '#0ea5e9',
    glowColor: 'shadow-info/30',
    antennaColor: '#38bdf8',
    visorBg: '#082f49',
    eyeColor: '#38bdf8',
  },
  con: {
    border: 'border-warning/50',
    gradientBg: 'from-warning/25 via-warning/10 to-base-300/80',
    accentColor: '#f59e0b',
    glowColor: 'shadow-warning/30',
    antennaColor: '#fbbf24',
    visorBg: '#451a03',
    eyeColor: '#fbbf24',
  },
  neutral: {
    border: 'border-base-content/20',
    gradientBg: 'from-base-300 via-base-200 to-base-300',
    accentColor: '#94a3b8',
    glowColor: 'shadow-base-content/10',
    antennaColor: '#cbd5e1',
    visorBg: '#1e293b',
    eyeColor: '#38bdf8',
  },
};

export const RobotAvatar: React.FC<RobotAvatarProps> = ({
  size = 'md',
  isThinking = false,
  status = 'online',
  variant = 'primary',
  showStatusIndicator = true,
  className = '',
  glow = true,
}) => {
  const currentSize = sizeConfig[size];
  const theme = variantConfig[variant];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer Glow Halo (animated on thinking) */}
      {glow && (
        <div
          className={`absolute inset-0 rounded-2xl filter blur-[3px] opacity-40 transition-all duration-300 ${
            isThinking ? 'bg-primary/50 animate-pulse scale-110' : 'bg-primary/20'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Main Avatar Container */}
      <div
        className={`relative ${currentSize.container} rounded-2xl flex items-center justify-center border ${
          theme.border
        } bg-gradient-to-b ${theme.gradientBg} shadow-md backdrop-blur-md transition-all duration-300 ${
          isThinking ? 'scale-105 ring-2 ring-primary/40' : 'hover:scale-105'
        }`}
      >
        {/* Animated Scanner Ring for Thinking */}
        {isThinking && (
          <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/60 animate-spin opacity-75" />
        )}

        {/* Expressive Futuristic Robot SVG */}
        <svg
          width={currentSize.svgSize}
          height={currentSize.svgSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-200"
        >
          {/* Top Antenna Pole */}
          <path
            d="M24 12V6"
            stroke={theme.antennaColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Top Antenna Beacon Sphere */}
          <circle
            cx="24"
            cy="5"
            r="3"
            fill={isThinking ? '#ef4444' : theme.antennaColor}
            className={isThinking ? 'animate-ping' : ''}
          />
          <circle
            cx="24"
            cy="5"
            r="2.5"
            fill={isThinking ? '#f87171' : theme.accentColor}
          />

          {/* Left Ear Sensor Pod */}
          <rect
            x="4"
            y="20"
            width="4"
            height="12"
            rx="2"
            fill={theme.accentColor}
            opacity="0.8"
          />
          {/* Right Ear Sensor Pod */}
          <rect
            x="40"
            y="20"
            width="4"
            height="12"
            rx="2"
            fill={theme.accentColor}
            opacity="0.8"
          />

          {/* Main Robot Helmet Base */}
          <rect
            x="8"
            y="12"
            width="32"
            height="28"
            rx="8"
            fill="currentColor"
            className="text-base-100"
            stroke={theme.accentColor}
            strokeWidth="2"
          />

          {/* Glossy Visor Screen */}
          <rect
            x="12"
            y="16"
            width="24"
            height="16"
            rx="5"
            fill={theme.visorBg}
          />

          {/* Visor Glare Accent */}
          <path
            d="M14 18H28C31 18 32 19 32 20"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Eyes State: Thinking vs Normal */}
          {isThinking ? (
            /* Cyber Scanning Eye Beam when Thinking */
            <g>
              <rect
                x="14"
                y="22"
                width="20"
                height="4"
                rx="2"
                fill="#38bdf8"
                opacity="0.25"
              />
              <circle cx="20" cy="24" r="2.5" fill="#38bdf8">
                <animate
                  attributeName="cx"
                  values="17;31;17"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ) : (
            /* Friendly Expressive Cyber Eyes */
            <g>
              {/* Left Eye */}
              <circle
                cx="19"
                cy="24"
                r="3"
                fill={theme.eyeColor}
              />
              <circle
                cx="20"
                cy="23"
                r="1"
                fill="#ffffff"
                opacity="0.9"
              />

              {/* Right Eye */}
              <circle
                cx="29"
                cy="24"
                r="3"
                fill={theme.eyeColor}
              />
              <circle
                cx="30"
                cy="23"
                r="1"
                fill="#ffffff"
                opacity="0.9"
              />
            </g>
          )}

          {/* Digital Equalizer / Mouth Grill */}
          <g opacity="0.65">
            <line
              x1="18"
              y1="35"
              x2="18"
              y2="37"
              stroke={theme.accentColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="22"
              y1="34"
              x2="22"
              y2="37"
              stroke={theme.accentColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="26"
              y1="34"
              x2="26"
              y2="37"
              stroke={theme.accentColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="30"
              y1="35"
              x2="30"
              y2="37"
              stroke={theme.accentColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Live Status Indicator Badge (online/busy/offline) */}
      {showStatusIndicator && status !== 'none' && (
        <span
          className={`absolute ${currentSize.badge} rounded-full ring-base-100 z-20 ${
            status === 'online'
              ? 'bg-emerald-500'
              : status === 'busy' || isThinking
              ? 'bg-amber-400'
              : 'bg-slate-400'
          }`}
          title={status === 'online' ? 'Online' : status === 'busy' ? 'Thinking' : 'Offline'}
        >
          {status === 'online' && !isThinking && (
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
          )}
        </span>
      )}
    </div>
  );
};

export default RobotAvatar;
