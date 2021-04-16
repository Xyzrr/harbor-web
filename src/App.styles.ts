import styled from "styled-components";

export const Logo = styled.h1`
  color: #666;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;

  max-width: 650px;
  margin: 0 auto;
  margin-top: 12vh;

  .firebaseui-page-provider-sign-in {
    margin: 0;
    .firebaseui-card-content {
      padding: 0;
    }
    .firebaseui-list-item {
      text-align: left;
      &:last-child {
        &::before {
          content: "or ";
          font-size: 14px;
          color: #666;
        }
        &::after {
          content: ".";
          font-size: 14px;
          color: #666;
        }
      }
    }
    .firebaseui-idp-button {
      max-width: none;
    }
    .firebaseui-idp-google {
      padding: 20px;
      border-radius: 8px;
      box-shadow: none;
      border: 2px solid #ccc;
      &:hover {
        border: 2px solid #666;
      }
      .firebaseui-idp-text {
        font-size: 18px;
        color: #444;
      }
    }
    .firebaseui-idp-password {
      background: none !important;
      padding: 0;
      box-shadow: none;
      display: inline;
      min-height: auto;
      width: fit-content;
      .firebaseui-idp-icon-wrapper {
        display: none;
      }
      .firebaseui-idp-text {
        color: #666;
        padding: 0;
        text-decoration: underline;
        font-weight: 400;
        text-transform: lowercase;
        transform: translateY(-1px);
        &:hover {
          color: #222;
        }
      }
    }
    .firebaseui-card-footer {
      padding: 0;
    }
    .firebaseui-tos {
      border-top: 1px solid #eee;
      padding-top: 24px;
      margin-top: 28px;
      text-align: left;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .firebaseui-id-page-password-sign-in,
  .firebaseui-id-page-sign-in,
  .firebaseui-id-page-password-sign-up,
  .firebaseui-id-page-password-recovery,
  .firebaseui-id-page-password-recovery-email-sent,
  .firebaseui-id-page-callback {
    margin: 0;
    box-shadow: none;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-top: 16px;

    button {
      box-shadow: none;
      border-radius: 8px;
    }
  }
`;
