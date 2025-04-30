'use client'

import React from 'react';
import { Button } from '@/components/ui/button';

interface AlertTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const AlertTypeCard: React.FC<AlertTypeCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div className="relative rounded-lg bg-zinc-900/80 p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-105 motion-reduce:transform-none">
      <div className="absolute inset-0 bg-cyan-600/20 rounded-lg blur-3xl opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-zinc-400 text-center">{description}</p>
        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700" onClick={onClick}>
          Set {title}
        </Button>
      </div>
    </div>
  );
};

export default AlertTypeCard;
