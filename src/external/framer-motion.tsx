/* eslint-disable @typescript-eslint/no-unused-vars, jsx-a11y/no-static-element-interactions */
import React from 'react';

export type PanInfo = { offset: { x: number } };

interface MotionDivProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDragEnd'> {
  children?: React.ReactNode;
  drag?: string;
  dragConstraints?: { left: number; right: number };
  dragElastic?: number;
  onDragEnd?: (event: unknown, info: PanInfo) => void;
}

const MotionDiv = ({ onDragEnd, ...props }: MotionDivProps) => (
  <div {...props} onMouseUp={(e) => onDragEnd?.(e, { offset: { x: 0 } })} />
);

export const motion = { div: MotionDiv };
