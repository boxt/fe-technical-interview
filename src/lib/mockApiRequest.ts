import { seedData } from "./seed";
/**
 * Mocks an API request
 * @param data the data to resolve the promise with; DEFAULT: seedData from /lib folder
 * @param error the error message to reject the promise with; DEFAULT: `Mocked error message`
 * @param shouldResolve whether the promise should resolve or reject; DEFAULT: `true`
 * @param delayInSeconds the time in seconds to wait before resolving the promise; DEFAULT: `0`
 * @returns a promise that resolves or rejects after the specified delay with the specified data or error
 */
export const mockApiRequest = ({
  data = seedData,
  error = "Mocked error message",
  shouldResolve = true,
  delayInSeconds = 0,
}: {
  delayInSeconds?: number;
  data?: any;
  shouldResolve?: boolean;
  error?: string;
}): Promise<any> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (shouldResolve ? resolve({ data }) : reject({ error })),
      delayInSeconds * 1000
    )
  );
