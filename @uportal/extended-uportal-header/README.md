# extended-uportal-header

## TODO :

- [x] Changer le nom du composant
- [x] Remplacer la partie multi-domain par un slot
- [x] Rendre le chargement du template optionnel
- [x] Ajouter le chargement du template par un json
- [x] Ecrire la documentation
- [ ] Prendre en compte les evos [Evos content menu](https://github.com/orgs/GIP-RECIA/projects/7#card-78698597)
- [ ] Tester
- [ ] Intégrer dans le dépot

## Installation

```
# Install with npm
npm install @gip-recia/extended-uportal-header
```

## Usage as Web Component

### Html

```html
<script
  src="/path/to/the/library/extended-uportal-header[.min].js"
  defer
></script>
<extended-uportal-header></extended-uportal-header>
```

### internationalization

The component support an internationalization mixin. This adds the additional prop `messages` which can be applied to override the default text messages in the various embed components.

For example:

```html
<extended-uportal-header
  messages='[{"locales": ["en", "en-US"], "messages": { "message": {"favorites": { "add": "Add me to your favorites!" } }}}]'
>
</extended-uportal-header>
```

The available messages to override are as follows:

```json
{
  "message": {
    "services": {
      "title": "All services",
      "filter": "Find a service..."
    },
    "favorites": {
      "add": "Add to favorites",
      "remove": "Remove from favorites",
      "title": "My Favorites",
      "empty": "No favorite defined"
    },
    "filter": {
      "selectOption": "All categories"
    },
    "userInfoPortletUrl": {
      "title": "See my account informations"
    },
    "userChangeEtabUrl": {
      "title": "Select an other organization"
    },
    "buttons": {
      "logout": "Sign out",
      "menuClose": "Close menu"
    }
  }
}
```

### Properties

- `messages`: type: `Object`, optional, see [internationalization](#internationalization);
- `domain`: type: `String`, optional, target portal domain (ex : `www.my-uportal.org`). If not set current domain is used;
- `portal-path`: type: `String`, optional, path add to domain to make portal url (ex : `/portal`);
- `service-name`: type: `String`, optional, current service (app) name;
- `favorites-portlet-card-size`: type: `String`, optional, possible value `auto|large|medium|small|smaller`, default: `auto`, define the size of portlet-cards component into `favorite-content` component part;
- `grid-portlet-card-size`: type: `String`, optional, possible value `auto|large|medium|small|smaller`, default: `auto`, define the size of `portlet-cards` component into `grid-content` component part;
- `default-org-logo-url`: type: `String`, optional, url to provide an institutional picture when none is found from an optional api;
- `default-org-logo-path`: type: `String`, optional, path from portal domain to provide an institutional picture when none is found from an optional api;
- `force-org-logo-url`: type: `String`, optional, url to provide an institutional picture overriding the default-org-logo and the institutional one obtained by an api (used to have an overview before updating change to every users from the api);
- `force-org-logo-path`: type: `String`, optional, path from portal domain to provide an institutional picture overriding the default-org-logo and the institutional one obtained by an api (used to have an overview before updating change to every users from the api);
- `force-org-icon-url`: type: `String`, optional, url to provide an institutional picture overriding the default-org-logo and the institutional one obtained by an api (used to have an overview before updating change to every users from the api);
- `force-org-icon-path`: type: `String`, optional, path from portal domain to provide an institutional picture overriding the default-org-logo and the institutional one obtained by an api (used to have an overview before updating change to every users from the api);
- `force-avatar-url`: type: `String`, optional, url to provide a default avatar picture for user;
- `force-avatar-path`: type: `String`, optional, path from portal domain to provide a default avatar picture for user;
- `context-api-url`: type: `String`,optional, default: `/uPortal`, usefull to provide a different uPortal context on which to do request;
- `favorite-api-url`: type: `String`,optional, default: `/uPortal/api/layout`, the uri/url of the favorites api;
- `layout-api-url`: type: `String`,optional, default: `/uPortal/api/v4-3/dlm/layout.json`, the uri/url of the layout api to request the favorite list in the oser defined order (only needed to get favorite's order defined by the user);
- `portlet-api-url`: type: `String`,optional, default: `/uPortal/api/v4-3/dlm/portletRegistry.json`, the uri/url of the portletRegistry api to obtains user authorized portlet list;
- `organization-api-url`: type: `String`,optional, optional, an uri/url of an api to retrieve organization informations, any json format is accepted, but configure `user-org-id-attribute-name`, `user-all-orgs-id-attribute-name`, `org-logo-url-attribute-name` to work with;
- `userInfo-api-url`: type: `String`,optional, default: `/uPortal/api/v5-1/userinfo`, url/uri on which the api request is done to obtain user information and the jwt token;
- `template-api-url`: type: `String`,optional, url on which the api request is done to obtain template informations;
- `template-api-path`: type: `String`,optional, path from portal domain on which the api request is done to obtain template informations;
- `template`: type: `Object`,optional, JSON Object that define icon (`iconPath`), icon opacity (`iconOpacity`) and background color (`color`). Icon opacity override css variable. ex : `'{"iconPath": "","iconOpacity": 1,"color":"#057436"}'` ;
- `sign-out-url`: type: `String`, default: `/uPortal/Logout`, an uri/url to call when user logout (for a logout button);
- `user-info-portlet-url`: type: `String`, default: `''`, an url/uri to the user information application;
- `switch-org-portlet-url`: type: `String`, default: `''`, an optional url/url of a rest api to obtain institutional organization information;
- `user-org-id-attribute-name`: type: `String`, default: `'ESCOSIRENCourant[0]'`, the attribute object path to obtain the id of the organization to retrieve from the organization's api;
- `org-logo-url-attribute-name`: type: `String`, default: `'otherAttributes.ESCOStructureLogo[0]'`, the attribute object path to obtain the organization Picture from organization details obtained from the organization's api;
- `user-all-orgs-id-attribute-name`: type: `String`, default: `'ESCOSIREN`, the attribute object path to obtain all ids of the organizations linked to the user and to retrieve from the organization's api;
- `hide-action-mode`: type: `String` : possible value `auto|always|never`, default: `auto`, define if we should show the actions, `auto` don't show on `small` breakpoint;
- `show-favorites-in-slider`: type : `boolean` : show or not the favorites in a slider;
- `icon-type`: type: `String` : possible value `four-square|four-empty-square|nine-square|nine-empty-square|never`, default: `hamburger`, define the menu icon type;
- `debug`: type: `Boolean`, default: `false`, for the demo/debug mode to be able to run in a standalone way (disable api call).
-

### Slots

#### menu

The content of the `menu` slot replace the `esco-content-menu` component.

```html
<extended-uportal-header>
  <div slot="menu">...</div>
</extended-uportal-header>
```

#### menu-icon

If `icon-type` attribute is set to `custom`, the content of the `menu-icon` slot replace the icon of the `esco-content-menu` component open button.
Use the `menu-icon` slot of the `esco-content-menu` component;

```html
<extended-uportal-header>
  <div slot="menu-icon">APPS</div>
</extended-uportal-header>
```

#### brand

The content of the `brand` slot replace the portal icon, name and app.

```html
<extended-uportal-header>
  <div slot="brand">...</div>
</extended-uportal-header>
```

#### user

The content of the `user` slot replace the the `eyebrow-user-info` component.

```html
<extended-uportal-header>
  <div slot="user">John Doe</div>
</extended-uportal-header>
```

#### not-loaded

The not-loaded slot is displayed while remote datas (user and organisation infos) are not loaded.

```html
<extended-uportal-header>
  <div slot="not-loaded">Chargement en cours</div>
</extended-uportal-header>
```

### Theming

#### Extend Header

Currently this component supports [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for overriding styles.

```css
:root {
  --ext-header-tpl-primary-color: #25b2f3;
  --ext-header-tpl-bg-color: var(--ext-header-tpl-primary-color);
  --ext-header-tpl-spaces: 8px;
  --ext-header-tpl-font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  --ext-header-tpl-font-size: 18px;
  --ext-header-tpl-font-color: #ffffff;
  --ext-header-tpl-icon-opacity: 0.6;
}
```

#### Embed ESCO Content Menu component

Currently this component supports [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for overriding button colors. Defining the following variables will change the colors for the component accordingly. They will fall back to the colors described below.

**_NOTE:_** This is only supported when the size attribute is set to `custom`.

You should define this in your custom stylesheet.

```css
:root {
  --content-gridcard-padding: 5px;
  --content-gridcard-border: none;
  --content-gridcard-bg-color: white;
  --content-gridcard-border-radius: 5px;
  --content-gridcard-shadow: none;
  --content-gridcard-shadow-hover: none;
  --content-gridcard-size-w: 180px;
  --content-gridcard-size-h: 180px;
  --content-gridcard-icon-size: 75px;
  --content-gridcard-icon-size: 75px;
  --content-gridcard-title-fontsize: 16px;
  --content-gridcard-description-fontsize: 16px;

  --content-griditem-margin: 20px auto;
}
```

_source : [https://github.com/uPortal-Project/uPortal-web-components/tree/master/%40uportal/esco-content-menu]_
