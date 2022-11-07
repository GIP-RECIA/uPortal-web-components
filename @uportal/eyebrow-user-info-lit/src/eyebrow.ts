// import 'core-js/stable';
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { configureLocalization, msg, localized, str } from '@lit/localize';
import scss from '@styles/eyebrow.scss';
import langHelper from '@helpers/langHelper';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';

export const { setLocale } = configureLocalization({
  sourceLocale: 'en',
  targetLocales: ['fr'],
  loadLocale: (locale) =>
    import(/* webpackMode: "eager" */ `@locales/${locale}.ts`),
});

@localized()
@customElement('eyebrow-user-info')
export class Eyebrow extends LitElement {
  @property({ type: String, attribute: 'display-name' })
  displayName = 'Unknown';
  @property({ type: String })
  email = '';
  @property({ type: String })
  picture = '';
  @property({ type: String, attribute: 'more-link' })
  moreLink = '';
  @property({ type: String, attribute: 'logout-link' })
  logoutLink = '';
  @property({ type: Boolean, attribute: 'menu-is-dark' })
  menuIsDark = true;
  @property({ type: String, attribute: 'avatar-size' })
  avatarSize = '28px';
  @state()
  visible = false;

  static styles = css`
    ${unsafeCSS(scss)}
  `;

  constructor() {
    super();
    const lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en',
    };
    const lang = langHelper.getPageLang(lhOpts);
    setLocale(lang);
    library.add(faSignOutAlt);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keyup', this.handleKeyPress.bind(this));
    window.addEventListener('click', this.handleClick.bind(this));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keyup', this.handleKeyPress.bind(this));
    window.removeEventListener('click', this.handleClick.bind(this));
  }

  firstUpdated(): void {
    this.shadowRoot
      ?.getElementById('dropdown-content')
      ?.addEventListener('transitionend', () => {
        this.setDropdownFocus();
      });
  }

  render(): TemplateResult {
    const faSignOutIcon = `${icon(faSignOutAlt).html}`;
    return html`
      <div class="user-info">
        <div ref="dropdownMenu" class="dropdown">
          <div
            id="dropdown-menu"
            class=${classMap({
              lighter: this.menuIsDark,
              'dropdown-menu': true,
            })}
            @click="${this.toggleDropdown}"
            @keypress="${this.toggleDropdown}"
            role="button"
            tabindex="0"
            aria-expanded="${this.visible ? true : false}"
            aria-label="${this.visible
              ? msg(str`Close account menu`)
              : msg(str`Open account menu`)}"
          >
            <div class="user-name">
              <span class="label">${this.displayName}</span>
            </div>
            <div class="user-avatar">
              <img
                src="${this.picture}"
                alt="${msg(str`avatar`)}"
                style=${styleMap({
                  width: this.avatarSize,
                  height: this.avatarSize,
                })}
              />
            </div>
          </div>
          <div
            id="dropdown-content"
            class=${classMap({
              closed: !this.visible,
              'dropdown-content': true,
            })}
          >
            <div class="user-details">
              <div class="user-avatar">
                ${this.moreLink != ''
                  ? html`
                      <a
                        id="more-link"
                        href="${this.moreLink}"
                        title="${msg(str`See my account information`)}"
                        tabindex="0"
                      >
                        <img src="${this.picture}" alt="${msg(str`avatar`)}" />
                      </a>
                    `
                  : html`
                      <img src="${this.picture}" alt="${msg(str`avatar`)}" />
                    `}
              </div>
              <div class="wrapper-info">
                <div class="user-name">
                  <span class="label">${this.displayName}</span>
                </div>
                <div class="user-mail">
                  <span class="label">${this.email}</span>
                </div>
              </div>
            </div>
            ${this.logoutLink != ''
              ? html`
                  <div class="sign-out">
                    <a
                      id="sign-out"
                      href="${this.logoutLink}"
                      title="${msg(str`Sign out`)}"
                      tabindex="0"
                    >
                      <span>${msg(str`Sign out`)}</span>
                      ${unsafeHTML(faSignOutIcon)}
                    </a>
                  </div>
                `
              : html``}
          </div>
        </div>
      </div>
    `;
  }
  toggleDropdown(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.visible = !this.visible;
  }
  handleKeyPress(e: KeyboardEvent): void {
    e.preventDefault();
    if (this.visible && e.key === 'Escape') {
      this.visible = false;
    }
  }
  handleClick(e: Event): void {
    if (e.target instanceof HTMLElement) {
      if (this.visible && !this.contains(e.target)) {
        this.visible = false;
      }
    }
  }

  setDropdownFocus(): void {
    if (this.visible) {
      let nextClickElID = 'sign-out';
      if (this.moreLink != '') {
        nextClickElID = 'more-link';
      }
      this.shadowRoot?.getElementById(nextClickElID)?.focus();
    } else {
      this.shadowRoot?.getElementById('dropdown-menu')?.focus();
    }
  }
}
