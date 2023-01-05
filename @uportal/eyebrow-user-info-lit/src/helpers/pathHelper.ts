export default class pathHelper {
  static getUrl(path: string, baseUrl = '', debug = false): string {
    if (!path.startsWith('http')) {
      if (baseUrl !== '' && !baseUrl.startsWith('http')) {
        baseUrl = `${debug ? 'http' : 'https'}://${baseUrl}`;
      }
      return baseUrl + path;
    }
    return path;
  }
}
