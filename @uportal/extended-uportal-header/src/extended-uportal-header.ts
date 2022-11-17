/** runtime */
import 'regenerator-runtime';
/** Lit */
import {
  html,
  LitElement,
  css,
  unsafeCSS,
  TemplateResult,
  AttributePart,
  PropertyValueMap,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { msg, localized, str } from '@lit/localize';
/** Helpers */
import sizeHelper from '@helpers/sizeHelper';
import { setLocale } from '@helpers/localisation';
import langHelper from '@helpers/langHelper';
/** Services */
import userInfoService, { userInfo } from '@services/userInfoService';
import orgInfoService, { orgInfo } from '@services/orgInfoService';
import templateService, { template } from '@services/templateService';
/** Components */
import '@gip-recia/eyebrow-user-info-lit';
import '@gip-recia/esco-content-menu-lit';
/** Styles */
import scss from '@styles/extended-uportal-header.scss';
/** Images */
import defaultOrgIcon from '@images/default-org.icon.png';
import defaultOrgImage from '@images/default-org.png';
import defaultAvatar from '@images/default-avatar.svg';

@customElement('extended-uportal-header')
export class ExtendedUportalHeader extends LitElement {
  @property({ type: Object })
  messages = [];
  @property({ type: String })
  domain = '';
  @property({ type: String, attribute: 'portail-path' })
  portailPath = '';
  @property({ type: String, attribute: 'service-name' })
  serviceName = '';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'favorites-portlet-card-size',
  })
  favoritesPortletCardSize = 'small';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'grid-portlet-card-size',
  })
  gridPortletCardSize = 'medium';
  @property({ type: String, attribute: 'default-org-logo-url' })
  defaultOrgLogoUrl = '';
  @property({ type: String, attribute: 'default-org-logo-path' })
  defaultOrgLogoPath = '';
  @property({ type: String, attribute: 'force-org-logo-url' })
  forceOrgLogoUrl = '';
  @property({ type: String, attribute: 'force-org-logo-path' })
  forceOrgLogoPath = '';
  @property({ type: String, attribute: 'default-org-icon-url' })
  defaultOrgIconUrl = '';
  @property({ type: String, attribute: 'default-org-icon-path' })
  defaultOrgIconPath = '';
  @property({ type: String, attribute: 'default-avatar-url' })
  defaultAvatarUrl = '';
  @property({ type: String, attribute: 'default-avatar-path' })
  defaultAvatarPath = '';
  @property({ type: String, attribute: 'context-api-url' })
  contextApiUrl = process.env.APP_PORTAL_CONTEXT ?? '';
  @property({ type: String, attribute: 'favorite-api-url' })
  favoriteApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_FAVORITES_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'layout-api-url' })
  layoutApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_FAVORITES_URI ?? '');
  @property({ type: String, attribute: 'portlet-api-url' })
  portletApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_BROWSABLE_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'organization-api-url' })
  organizationApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_ORG_API_URI ?? '');
  @property({ type: String, attribute: 'user-info-api-url' })
  userInfoApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_USER_INFO_URI ?? '');
  @property({ type: String, attribute: 'template-api-url' })
  templateApiUrl = '';
  @property({ type: String, attribute: 'template-api-path' })
  templateApiPath = process.env.APP_TPL_API_PATH ?? '';
  @property({ type: Object })
  template: template | null = null;
  @property({ type: String, attribute: 'sign-out-url' })
  signoutUrl = process.env.APP_LOGOUT_URL ?? '';
  @property({ type: String, attribute: 'user-info-portlet-url' })
  userInfoPortletUrl = '';
  @property({ type: String, attribute: 'switch-org-portlet-url' })
  switchOrgPortletUrl = '';
  @property({ type: String, attribute: 'user-org-id-attribute-name' })
  orgAttributeName = 'ESCOSIRENCourant[0]';
  @property({ type: String, attribute: 'org-logo-url-attribute-name' })
  orgLogoUrlAttributeName = 'otherAttributes.ESCOStructureLogo[0]';
  @property({ type: String, attribute: 'user-all-orgs-id-attribute-name' })
  userAllOrgsIdAttributeName = 'ESCOSIREN';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return ['auto', 'always', 'never'].includes(newVal);
    },
    attribute: 'hide-action-mode',
  })
  hideActionMode = 'auto';
  @property({ type: Boolean, attribute: 'show-favorites-in-slider' })
  showFavoritesInSlider = false;
  @property({
    type: String,
    hasChanged(newVal: string) {
      return [
        'hamburger',
        'four-square',
        'four-empty-square',
        'nine-square',
        'nine-empty-square',
        'four-circle',
        'four-empty-circle',
        'nine-circle',
        'nine-empty-circle',
      ].includes(newVal);
    },
    attribute: 'icon-type',
  })
  iconType = 'hamburger';
  @property({
    type: String,
    attribute: 'return-home-target',
    hasChanged(newVal: string) {
      return ['_self', '_blank'].includes(newVal);
    },
  })
  returnHomeTarget = '_self';
  @property({ type: String, attribute: 'return-home-title' })
  returnHomeTitle: string | null = null;
  @property({ type: Boolean })
  debug = false;

  @state()
  private _userInfos: userInfo | null = null;

  @state()
  private _orgInfos: orgInfo | null = null;

  constructor() {
    super();
    if (this.domain === '') {
      this.domain = window.document.domain;
    }
    const lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en',
    };
    const lang = langHelper.getPageLang(lhOpts);
    setLocale(lang);
    langHelper.setLocale(lang);
  }

  protected willUpdate(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
    this._getUserInfos();
    if (this._userInfos?.orgId) this._getOrgInfos(this._userInfos.orgId);
    this._getTemplate();
  }

  private async _getUserInfos() {
    if (this._userInfos !== null) return;
    this._userInfos = await userInfoService.get(
      this._makeUrl(this.userInfoApiUrl),
      this._makeUrl(this.layoutApiUrl),
      this.orgAttributeName,
      this.debug
    );
  }

  private async _getOrgInfos(orgId: string) {
    if (this._orgInfos !== null) return;
    this._orgInfos = await orgInfoService.get(
      this._makeUrl(this.userInfoApiUrl),
      this._makeUrl(this.organizationApiUrl),
      orgId,
      this.debug
    );
  }

  private async _getTemplate() {
    if (this.template !== null) return;
    this.template = await templateService.get(this._tplApiUrl(), this.domain);
  }

  private _makeUrl(path: string, domain = ''): string {
    const protocol = this.debug ? 'http' : 'https';
    return `${protocol}://${domain == '' ? this.domain : domain}${path}`;
  }

  private _defaultOrgLogo() {
    return this.defaultOrgLogoUrl != ''
      ? this.defaultOrgLogoUrl
      : this.defaultOrgLogoPath != ''
      ? this._makeUrl(this.defaultOrgLogoPath)
      : defaultOrgImage;
  }

  private _forceOrgLogo() {
    return this.forceOrgLogoUrl != ''
      ? this.forceOrgLogoUrl
      : this.forceOrgLogoPath != ''
      ? this._makeUrl(this.forceOrgLogoPath)
      : false;
  }

  private _picture() {
    return this._userInfos?.picture
      ? this._makeUrl(this._userInfos.picture)
      : this.defaultAvatarUrl != ''
      ? this.defaultAvatarUrl
      : this.defaultAvatarPath != ''
      ? this._makeUrl(this.defaultAvatarPath)
      : defaultAvatar;
  }

  private _orgIconUrl() {
    return this.template?.iconPath
      ? this._makeUrl(this.template?.iconPath)
      : this.defaultOrgIconUrl != ''
      ? this.defaultOrgIconUrl
      : this.defaultOrgIconPath != ''
      ? this._makeUrl(this.defaultOrgIconPath)
      : defaultOrgIcon;
  }

  private _tplApiUrl() {
    return this.templateApiUrl != ''
      ? this.templateApiUrl
      : this.templateApiPath != ''
      ? this._makeUrl(this.templateApiPath)
      : '';
  }

  render(): TemplateResult {
    this._preRender();
    return this._userInfos && this._orgInfos
      ? html`
          <div id="extended-uportal-header-container">
            <div id="extended-uportal-header-menu">
              <slot name="menu">
                <esco-hamburger-menu
                  .messages=${this.messages}
                  favorites-portlet-card-size="${this.favoritesPortletCardSize}"
                  grid-portlet-card-size="${this.gridPortletCardSize}"
                  default-org-logo="${this._defaultOrgLogo()}"
                  ?force-org-logo="${this._forceOrgLogo()}"
                  context-api-url="${this.contextApiUrl}"
                  favorite-api-url="${this._makeUrl(this.favoriteApiUrl)}"
                  layout-api-url="${this._makeUrl(this.layoutApiUrl)}"
                  portlet-api-url="${this._makeUrl(this.portletApiUrl)}"
                  organization-api-url="${this._makeUrl(
                    this.organizationApiUrl
                  )}"
                  user-info-api-url="${this._makeUrl(this.userInfoApiUrl)}"
                  sign-out-url="${this.signoutUrl}"
                  user-info-portlet-url="${this.userInfoPortletUrl}"
                  switch-org-portlet-url="${this.switchOrgPortletUrl}"
                  user-org-id-attribute-name="${this.orgAttributeName}"
                  org-logo-url-attribute-name="${this.orgLogoUrlAttributeName}"
                  user-all-orgs-id-attribute-name="${this
                    .userAllOrgsIdAttributeName}"
                  hide-action-mode="${this.hideActionMode}"
                  ?show-favorites-in-slider=${this.showFavoritesInSlider}
                  icon-type=${this.iconType}
                  ?debug=${this.debug}
                >
                </esco-hamburger-menu>
              </slot>
            </div>
            <div id="extended-uportal-header-org">
              <slot name="brand">
                <a
                  class="org-logo"
                  href="${this._makeUrl(this.portailPath)}"
                  target="${this.returnHomeTarget}"
                  title="${this.returnHomeTitle ??
                  this.template?.name ??
                  langHelper.localTranslation(
                    'message.header.gotoportal',
                    msg('go to the portal')
                  )}"
                >
                  <img
                    src="${this._orgIconUrl()}"
                    height="28px"
                    alt="${this.template?.name ??
                    langHelper.localTranslation(
                      'message.header.icon',
                      msg('portal icon')
                    )}"
                  />
                </a>
                <p class="org-display-name" tabindex="0">
                  ${this._orgInfos?.displayName.toUpperCase()}
                  ${this.serviceName != ''
                    ? html`<span class="service-name">
                        > ${this.serviceName}</span
                      >`
                    : ''}
                </p>
              </slot>
            </div>
            <div id="extended-uportal-header-user">
              <slot name="user">
                <eyebrow-user-info
                  :menu-is-dark="false"
                  display-name="${this._userInfos.displayName}"
                  picture="${this._picture()}"
                  email="${this._userInfos.email}"
                  logout-link="${this.signoutUrl}"
                  more-link="${this.userInfoPortletUrl}"
                  avatar-size="28px"
                ></eyebrow-user-info>
              </slot>
            </div>
          </div>
        `
      : html` <slot name="not-loaded"></slot> `;
  }

  private _preRender() {
    if (this.template?.color) {
      this.style.setProperty(
        '--ext-header-tpl-primary-color',
        this.template?.color
      );
    }
    if (this.template?.iconOpacity) {
      this.style.setProperty(
        '--ext-header-tpl-icon-opacity',
        this.template.iconOpacity.toString()
      );
    }
  }

  static styles = css`
    ${unsafeCSS(scss)}
  `;
}
