import openIdConnect from '@uportal/open-id-connect';
export interface orgInfo {
  displayName: string;
  logo?: string;
}
export default class orgInfoService {
  static async get(
    userInfoApiUrl: string,
    orgApiUrl: string,
    orgId: string,
    debug: boolean
  ): Promise<orgInfo | null> {
    try {
      const requestHeaders: HeadersInit = new Headers();
      let userInfoFetch;
      if (!debug) {
        userInfoFetch = await openIdConnect({ userInfoApiUrl });
        const jwt = userInfoFetch.encoded;

        requestHeaders.set('Authorization', `Bearer ${jwt}`);
      }

      const options = {
        method: 'GET',
        credentials: 'include' as RequestCredentials,
        headers: requestHeaders,
      };

      const getParams = new URLSearchParams({
        ids: orgId,
      });

      const response = await fetch(`${orgApiUrl}?${getParams}`, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const org: any = await response.json();
      if (org[orgId]) {
        const currentOrg = org[orgId];
        const orgInfos = {
          displayName: currentOrg?.displayName,
          logo: currentOrg?.otherAttributes?.ESCOStructureLogo,
        };

        if (orgInfos.displayName) return orgInfos;
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, userInfoApiUrl, orgApiUrl, debug);
      return null;
    }
    return null;
  }
}
