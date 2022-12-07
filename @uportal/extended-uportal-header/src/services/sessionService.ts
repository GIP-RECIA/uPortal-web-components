import openIdConnect, { JWT } from '@uportal/open-id-connect';

export default class sessionService {
  static async get(sessionApiUrl: string): Promise<number> {
    try {
      const response = await fetch(sessionApiUrl);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const person: any = await response.json();

      if (person && person.sessionKey && person.timeoutMS) {
        return person.timeoutMS;
      }
      return 0;
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, sessionApiUrl);
      return 0;
    }
    return 0;
  }
}
