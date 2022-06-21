# Changelog
All notable changes to this project will be documented in this file.

## [0.2.0] - 2022-06-21
### Added
- Now locations and routes can be selected if clicked anywhere, including their button.
- New border on each selectable location.
- Now routes can be filtered depending on departure time, lowest price or faster duration.
- Now date picker can be used with arrows.
- Now user is alerted if information is about to be lost.
- New loading modal to give more information about actions of user.

### Changed
- Now disabled buttons are greyed out instead of maintaining their original color.
- Now single ticket origin is automatically selected based on user location.
- Now single ticket pagination is based on "previous" and "more" buttons.
- Now single ticket information state is saved between pages.
- Now NIF state is saved between pages.
- Now kiosk images are bigger.

### Fixed
- Single ticket route selection pagination buttons being locked.
- Single ticket location selection modal border color was a different tone of blue.
- Date picker allowing dates prior to today.

## [0.1.0] - 2022-06-07

[0.2.0]: https://github.com/joaompfonseca/bus-kiosk/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/joaompfonseca/bus-kiosk/releases/tag/v0.1.0