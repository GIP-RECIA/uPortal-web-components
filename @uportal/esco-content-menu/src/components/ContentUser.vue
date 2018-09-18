<template>
  <section class="content-user" :class="isSmall ? 'small' : ''"
           :style="isSmall ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + getOrgImgUrl() + ');' : ''">
    <div>
      <div class="org-img" >
        <img :src="getOrgImgUrl()" :title="orgInfo.displayName" :alt="orgInfo.displayName" />
      </div>

      <div class="user-info">
        <div>
          <div v-if="getUserAvatar() != null" class="user-avatar">
            <a v-if="userInfoPortletUrl !== ''" :href="userInfoPortletUrl" :title="translate('message.userInfoPortletUrl.title')"><img :src="getUserAvatar()" :alt="'avatar'"/></a>
            <img v-else :src="getUserAvatar()" :alt="'avatar'"/>
          </div>
          <div v-else class="user-avatar"><icon :name="'user'"></icon></div>
          <div class="wrapper-info">
            <div class="user-name"><span :title="userInfo.name">{{userInfo.name}}</span></div>
            <div class="user-org"><span :title="orgInfo.displayName">{{orgInfo.displayName}}</span></div>
          </div>
          <div v-if="otherOrgs.length > 1" class="other-orgs">
            <a :href="apiUrlOrgInfo" :title="translate('message.userChangeEtabUrl.title')"><icon :name="'exchange-alt'" ></icon></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from "../i18n.js";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/user";
import "vue-awesome/icons/exchange-alt";

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default {
  name: "ContentUser",
  props: {
    isSmall: { type: Boolean, default: false },
    orgInfo: { type: Object, default: () => ({}) },
    otherOrgs: { type: Array, default: () => [] },
    userInfo: { type: Object, required: true, default: () => undefined },
    apiUrlOrgInfo: {
      type: String,
      default: process.env.VUE_APP_ORG_INFO_URI
    },
    defaultOrgLogo: { type: String, required: true },
    userInfoPortletUrl: { type: String, default: "" }
  },
  components: {
    Icon
  },
  methods: {
    translate(text, lang) {
      return i18n.t(text, lang);
    },
    hasOrgImage() {
      return (
        this.orgInfo !== {} &&
        this.orgInfo.otherAttributes &&
        this.orgInfo.otherAttributes.ESCOStructureLogo &&
        this.orgInfo.otherAttributes.ESCOStructureLogo.length > 0
      );
    },
    getOrgImgUrl() {
      return this.hasOrgImage()
        ? this.computeImgUrl(this.orgInfo.otherAttributes.ESCOStructureLogo[0])
        : this.defaultOrgLogo;
    },
    getUserAvatar() {
      let avatar = this.userInfo.picture || null;
      return this.computeImgUrl(avatar);
    },
    computeImgUrl(url) {
      if (url != null && !url.startsWith("http")) {
        return process.env.VUE_APP_PORTAL_BASE_URL + url;
      }
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.content-user {
  min-width: 350px;
  height: auto;
  font-size: 14px;

  &.small {
    min-width: initial;
    width: 100%;
    min-height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    > div {
      > .org-img {
        display: none;
      }

      > .user-info {
        padding: 15px 0;
        > div {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    height: 100%;
    > .org-img {
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 1024px) {
        margin-top: 15%;
      }

      img {
        width: 270px;
        height: auto;
        border-radius: 10px;
      }
    }
    > .user-info {
      padding: 25px 0;

      > div {
        display: flex;
        align-items: center;
        border-top-right-radius: 27px;
        border-bottom-right-radius: 27px;
        height: 54px;
        background-color: rgba(0, 0, 0, 0.7);

        :only-child:not(.user-avatar) {
          display: inline-block;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
        }
        span {
          color: white;
        }
        .user-avatar {
          float: left;
          margin: 0 15px;
          img,
          svg {
            width: 68px;
            height: 68px;
            border-radius: 50%;
          }
          svg {
            color: white;
            background-color: #b7b7b7;
          }
        }
        .wrapper-info {
          :only-child {
            display: block;
          }
          .user-name {
            font-weight: bold;
          }
        }
        .other-orgs {
          flex: 1;
          > a {
            float: right;
            color: white;
            margin-right: 15px;
            > svg {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
    > .org-img + .user-info {
      margin-top: auto;
    }
  }
}
</style>