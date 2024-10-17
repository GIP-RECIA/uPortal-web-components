export interface portlet {
  title: string;
}
export default class portletService {
  static async get(
    portletApiUrl: string,
    fname: string
  ): Promise<portlet | null> {
    portletApiUrl = portletApiUrl.endsWith('/')
      ? portletApiUrl
      : `${portletApiUrl}/`;

    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(`${portletApiUrl}${fname}.json`, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const portlet = await response.json();

      return {
        title: portlet?.portlet?.title ?? '',
      };
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, portletApiUrl);
      return null;
    }
    return null;
  }
}
