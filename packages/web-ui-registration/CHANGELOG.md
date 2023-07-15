# @rocket.chat/web-ui-registration

## 1.0.0-rc.2

### Patch Changes

- f76d514341: Implemented a visual password verification in the Register User form, My Profile page, and reset password page. With this, the user will know exactly why their password is weak and how to improve it.
- Updated dependencies [f76d514341]
  - @rocket.chat/ui-contexts@1.0.0-rc.2

## 1.0.0-rc.1

### Patch Changes

- @rocket.chat/ui-contexts@1.0.0-rc.1

## 1.0.0-rc.0

### Minor Changes

- 4b5a87c88b: fix: Handle login services errors

### Patch Changes

- e14ec50816: Added and Improved Custom Fields form to Registration Flow
- ae39f91085: ✅ Added a new email validation in the Registration Form
- ebbb608166: fix: Login Terms custom content
  The custom layout Login Terms did not had any effect on the login screen, so it was changed to get the proper setting effect
- 6938bcd1a2: fix: Manually approved user registration flow
  The new user gets redirected to the login page with a toast message saying:

  > Before you can login, your account must be manually activated by an administrator.

- Updated dependencies [e14ec50816]
  - @rocket.chat/ui-contexts@1.0.0-rc.0