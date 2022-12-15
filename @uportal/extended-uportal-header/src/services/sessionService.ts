export type sessionInfos = {
  key: string;
  timeout: number;
  isConnected: boolean;
};

export default class sessionService {
  static async get(sessionApiUrl: string): Promise<sessionInfos | null> {
    try {
      const options = {
        method: 'GET',
        credentials: 'include' as RequestCredentials,
      };

      const response = await fetch(sessionApiUrl, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const datas: any = await response.json();
      if (datas.person) {
        return {
          key: datas.person?.sessionKey,
          timeout: datas.person?.timeoutMS,
          isConnected: datas.person?.sessionKey !== null,
        };
      }
      return null;
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, sessionApiUrl);
      return null;
    }
    return null;
  }
}
