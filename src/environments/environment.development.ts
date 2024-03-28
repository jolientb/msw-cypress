import { setupWorker } from 'msw/browser';
import { handlers } from "../mocks/handlers";

export const environment = {};
console.log('environment')

const worker = setupWorker(...handlers)
worker.start({onUnhandledRequest: 'bypass'});
