// import 'core-js/stable';
import 'regenerator-runtime';
import {
  html,
  LitElement,
  css,
  unsafeCSS,
  TemplateResult,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { keyed } from 'lit/directives/keyed.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  unsafeHTML,
  UnsafeHTMLDirective,
} from 'lit-html/directives/unsafe-html.js';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import scss from '@styles/eyebrow.scss';
import langHelper from '@helpers/langHelper';
import pathHelper from '@helpers/pathHelper';
import {
  library,
  icon,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setLocale } from '@helpers/localisation';
import {
  faArrowRightFromBracket,
  faChevronDown,
  faChevronUp,
  faGear,
  faInfoCircle,
  faPlay,
  faRightLeft,
} from '@fortawesome/free-solid-svg-icons';
import { DirectiveResult } from 'lit-html/directive';

enum ItemType {
  Notification = 'notification',
  Settings = 'settings',
  InfoEtab = 'info-etab',
  ChangeEtab = 'change-etab',
  Starter = 'starter',
  Logout = 'logout',
}

@customElement('eyebrow-user-info')
export class Eyebrow extends LitElement {
  @property({ type: Object })
  messages = [];

  @property({ type: String, attribute: 'portal-base-url' })
  portalBaseUrl = '';

  @property({ type: String, attribute: 'display-name' })
  displayName = 'Unknown';

  @property({ type: String })
  function = '';

  @property({ type: String })
  picture = '';

  @property({ type: String, attribute: 'menu-is-dark' })
  menuIsDark = 'true';

  @property({ type: String, attribute: 'avatar-size' })
  avatarSize = '28px';

  @property({ type: String })
  config = '{}';

  @property({ type: Number })
  notification = 0;

  @property({ type: Boolean, attribute: 'force-new-ui' })
  forceNewUi = false;

  @state()
  isExpanded = false;

  @state()
  localConfig: Record<
    ItemType,
    false | { icon?: IconDefinition; link?: string | null }
  > = {
    [ItemType.Notification]: {},
    [ItemType.Settings]: {
      icon: faGear,
      link: '',
    },
    [ItemType.InfoEtab]: {
      icon: faInfoCircle,
    },
    [ItemType.ChangeEtab]: {
      icon: faRightLeft,
      link: '/uPortal/p/switchStruct/',
    },
    [ItemType.Starter]: {
      icon: faPlay,
    },
    [ItemType.Logout]: {
      icon: faArrowRightFromBracket,
      link: '/uPortal/Logout',
    },
  };

  static styles = css`
    ${unsafeCSS(scss)}
  `;

  constructor() {
    super();
    library.add(
      faArrowRightFromBracket,
      faChevronDown,
      faChevronUp,
      faGear,
      faInfoCircle,
      faPlay,
      faRightLeft
    );
    const lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en',
    };
    const lang = langHelper.getPageLang(lhOpts);
    setLocale(lang);
    langHelper.setLocale(lang);
    updateWhenLocaleChanges(this);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keyup', this.handleKeyPress.bind(this));
    window.addEventListener('keyup', this.handleOutsideEvents.bind(this));
    window.addEventListener('click', this.handleOutsideEvents.bind(this));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keyup', this.handleKeyPress.bind(this));
    window.removeEventListener('keyup', this.handleOutsideEvents.bind(this));
    window.removeEventListener('click', this.handleOutsideEvents.bind(this));
  }

  protected shouldUpdate(_changedProperties: PropertyValues<this>): boolean {
    if (_changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
    if (_changedProperties.has('config')) {
      this.mergeConfig();
    }
    return true;
  }

  mergeConfig(): void {
    const parsedConfig = JSON.parse(this.config);
    const merged: typeof this.localConfig = { ...this.localConfig };

    for (const key in parsedConfig) {
      const value = parsedConfig[key];
      if (value === false) {
        merged[key as ItemType] = false;
      } else {
        merged[key as ItemType] = {
          ...merged[key as ItemType],
          ...value,
        };
      }
    }

    this.localConfig = merged;
  }

  toggleDropdown(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  closeDropdown(e: Event, resetFocus = true): void {
    e.stopPropagation();
    this.isExpanded = false;
    if (resetFocus) this.shadowRoot?.getElementById('eyebrow-button')?.focus();
  }

  handleKeyPress(e: KeyboardEvent): void {
    if (this.isExpanded && e.key === 'Escape') {
      e.preventDefault();
      this.closeDropdown(e);
    }
  }

  handleOutsideEvents(e: KeyboardEvent | MouseEvent): void {
    if (
      this.isExpanded &&
      e.target instanceof HTMLElement &&
      !(this.contains(e.target) || e.composedPath().includes(this))
    ) {
      this.isExpanded = false;
    }
  }

  emitEvent(e: Event, type: string): void {
    this.closeDropdown(e, false);
    document.dispatchEvent(
      new CustomEvent('eyebrow-user-info', {
        detail: {
          type,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  getIcon(svg: IconDefinition): DirectiveResult<typeof UnsafeHTMLDirective> {
    return unsafeHTML(icon(svg).html.toString());
  }

  static i18n(): Record<ItemType, string> {
    return {
      [ItemType.Notification]: langHelper.localTranslation(
        'message.eyebrow.notification',
        msg('Notifications')
      ),
      [ItemType.Settings]: langHelper.localTranslation(
        'message.eyebrow.information',
        msg('My profile')
      ),
      [ItemType.InfoEtab]: langHelper.localTranslation(
        'message.eyebrow.info-etab',
        msg('School info')
      ),
      [ItemType.ChangeEtab]: langHelper.localTranslation(
        'message.eyebrow.change-etab',
        msg('Change school')
      ),
      [ItemType.Starter]: langHelper.localTranslation(
        'message.eyebrow.starter',
        msg('Start tutorial')
      ),
      [ItemType.Logout]: langHelper.localTranslation(
        'message.eyebrow.logout',
        msg('Lougout')
      ),
    };
  }

  itemTemplate(item: {
    id: ItemType;
    icon?: IconDefinition;
    link?: string | null;
  }): TemplateResult {
    const content = html`
      ${Eyebrow.i18n()[item.id]}
      ${item.id === ItemType.Notification
        ? keyed(
            this.notification,
            html`
              <div
                class="counter"
                style="${styleMap({
                  display: this.notification > 0 ? undefined : 'none',
                })}"
              >
                ${this.notification}
              </div>
            `
          )
        : undefined}
      ${item.icon ? keyed(item.icon, this.getIcon(item.icon)) : undefined}
    `;

    return html`
      <li>
        ${keyed(
          item.link,
          item.link && item.link.trim() !== ''
            ? html`
                <a
                  id="${item.id}"
                  href="${pathHelper.getUrl(item.link, this.portalBaseUrl)}"
                  @click="${this.closeDropdown}"
                >
                  ${content}
                </a>
              `
            : html`
                <button
                  id="${item.id}"
                  @click="${(e: Event) => this.emitEvent(e, item.id)}"
                >
                  ${content}
                </button>
              `
        )}
      </li>
    `;
  }

  render(): TemplateResult {
    return html`
      <div
        class="${classMap({
          eyebrow: true,
          'force-new-ui': this.forceNewUi,
        })}"
      >
        <div
          class="eyebrow-notification"
          style="${styleMap({
            display:
              this.localConfig.notification !== false && this.notification > 0
                ? undefined
                : 'none',
          })}"
        ></div>
        <button
          id="eyebrow-button"
          class="eyebrow-button"
          aria-expanded="${this.isExpanded}"
          aria-controls="eyebrow-menu"
          aria-label="${langHelper.localTranslation(
            'message.eyebrow.menu',
            msg('My account menu')
          )}"
          style="${styleMap({
            color:
              this.menuIsDark.toLowerCase() === 'true' ? 'white' : undefined,
          })}"
          @click="${this.toggleDropdown}"
        >
          <img
            src="${pathHelper.getUrl(this.picture, this.portalBaseUrl)}"
            alt=""
            class="picture"
            style="${styleMap({
              height: this.avatarSize !== '' ? this.avatarSize : undefined,
              width: this.avatarSize !== '' ? this.avatarSize : undefined,
            })}"
          />
          <div class="info">
            <span class="displayname">${this.displayName}</span>
            <span
              class="function"
              style="${styleMap({
                display: this.function !== '' ? undefined : 'none',
              })}"
            >
              ${this.function}
            </span>
          </div>
          ${this.getIcon(this.isExpanded ? faChevronUp : faChevronDown)}
        </button>
        <ul
          id="eyebrow-menu"
          class="eyebrow-menu"
          style="${styleMap({
            display: this.isExpanded ? undefined : 'none',
          })}"
        >
          ${Object.entries(this.localConfig)
            ?.filter(([key, value]) => {
              return (
                Object.values(ItemType).includes(key as ItemType) &&
                value !== false
              );
            })
            .map(([key, value]) =>
              this.itemTemplate({ id: key as ItemType, ...value })
            )}
        </ul>
      </div>
    `;
  }
}
