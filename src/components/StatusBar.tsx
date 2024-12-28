import React from 'react';
import { Battery, Wifi } from 'lucide-react';

export const StatusBar = () => (
  <div className="flex justify-between items-center mb-4 text-cyan-300">
    <div className="flex items-center space-x-1">
      <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
      <span className="text-xs">9:41</span>
    </div>
    <div className="flex items-center space-x-2">
      <Wifi size={16} />
      <Battery size={16} />
    </div>
  </div>
);