import '@testing-library/jest-dom';

import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

// Mock of ResizeObserver to test react-tooltip instances
interface ResizeObserverEntry {
  target: Element;
  contentRect: DOMRectReadOnly;
}

type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;

class ResizeObserver {
  private callback: ResizeObserverCallback;
  private observations: Element[] = [];

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element): void {
    this.observations.push(target);
  }

  unobserve(target: Element): void {
    this.observations = this.observations.filter(obs => obs !== target);
  }

  disconnect(): void {
    this.observations = [];
  }
}

// Attach the mock to the global object
global.ResizeObserver = ResizeObserver;
