export interface template {
  name: string;
  iconPath: string;
  iconOpacity: number;
  color: string;
}
export default class templateService {
  static async get(
    templateApiUrl: string,
    domain: string
  ): Promise<template | null> {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(templateApiUrl, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const templates = await response.json();

      if (templates.data) {
        const currenTemplate = templates.data?.find(
          (tpl: { identity: { domains: string[] } }) =>
            tpl?.identity?.domains?.includes(domain)
        );
        if (currenTemplate) {
          const name = currenTemplate?.identity?.name;
          const icon = currenTemplate?.images?.find(
            (image: { Id: string }) => image?.Id == 'icon'
          );
          const color = currenTemplate?.colors?.find(
            (color: { Id: string }) => color?.Id == 'primary'
          )?.hexa;
          if (icon && color) {
            return {
              name,
              iconPath: icon?.path ?? '',
              iconOpacity: icon?.opacity ?? 1,
              color,
            };
          } else {
            console.error('Incorrect template datas', icon, color);
          }
        } else {
          console.error('Template API return no result', currenTemplate);
        }
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, templateApiUrl);
      return null;
    }
    return null;
  }
}
