import openIdConnect, { JWT } from '@uportal/open-id-connect';
import get from 'lodash/get';

export interface userInfo {
  displayName: string;
  picture?: string;
  email: string;
  orgId?: string;
}
export default class userInfoService {
  static async get(
    userInfoApiUrl: string,
    layoutApiUrl: string,
    orgIdAttribute: string,
    debug: boolean
  ): Promise<userInfo | null> {
    try {
      const requestHeaders: HeadersInit = new Headers();
      let userInfoFetch;
      if (!debug) {
        userInfoFetch = await openIdConnect({ userInfoApiUrl });
        const jwt = userInfoFetch.encoded;

        requestHeaders.set('Authorization', `Bearer ${jwt}`);
      } else {
        const response = await fetch(userInfoApiUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data: JWT = await response.json();
        userInfoFetch = {
          encoded: '',
          decoded: data,
        };
      }

      const options = {
        method: 'GET',
        credentials: 'include' as RequestCredentials,
        headers: requestHeaders,
      };

      const response = await fetch(layoutApiUrl, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const layout: any = await response.json();
      if (
        layout?.authenticated &&
        (layout.authenticated === true || layout.authenticated === 'true')
      ) {
        const user = {
          displayName: userInfoFetch?.decoded?.name,
          picture: userInfoFetch?.decoded?.picture as string,
          email: userInfoFetch?.decoded?.email,
          orgId: get(userInfoFetch?.decoded, orgIdAttribute) as string,
        };
        if (user.displayName && user.orgId) return user;
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, userInfoApiUrl, layoutApiUrl, debug);
      return null;
    }
    return null;
  }
}
