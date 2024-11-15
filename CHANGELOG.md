## 1.0.0 (Unreleased)

* Initial release

## [1.0.1-rc.3] (15-11-2024)

### Added

* `disabled` and `icon` customizations for `custom` `ButtonBase` component

### Changed

* Improved `custom` button Tailwind CSS configuration see [#22](https://github.com/robuust/vue-components/issues/22)

### Deprecated

* `hoverBackgroundColor`, `hoverColor`, `styles`, and `hoverStyles` properties for `custom` `ButtonBase` component

### Migration

```javascript
// tailwind.config.js
export default {
  // ...
  theme: {
    extend: {
      components: {
        button: {
          // Old
          custom: {
            foo: {
              backgroundColor: '#f00',
              color: '#fff',
              hoverBackgroundColor: '#f00',
              hoverColor: '#fff',
              styles: {},
              hoverStyles: {},
            },
            // New
            bar: {
              backgroundColor: '#f00',
              color: '#fff',
              hover: {
                backgroundColor: '#f00',
                color: '#fff',
              },
              disabled: {
                backgroundColor: '#f00',
                color: '#fff',
              },
              icon: {
                color: '#fff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [components],
};
```

## 1.0.1-rc.2 (14-11-2024)

### Changed

* `ButtonBase` component improvements
* Updated docs
  
## 1.0.1-rc.1 (12-11-2024)

### Added

* `ButtonBase` component
