import { next as runNext } from '@ember/runloop';

export default function pause(ms = 100): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function next(): Promise<void> {
  return new Promise((resolve) => runNext(null, resolve));
}
