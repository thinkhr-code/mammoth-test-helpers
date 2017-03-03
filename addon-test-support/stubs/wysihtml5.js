let storedValue;

export default function stubWysihtml5() {
  window.wysihtml5 = {
    lang: {
      object() {
        return {
          clone() {
            return {
              tags: {
                div: {
                  one_of_type: {},
                  check_attributes: {}
                },
                span: {}
              }
            };
          }
        };
      }
    },

    Editor() {
      return {
        setValue(value) {
          storedValue = value;
        },
        on() {
          return {
            on() {}
          };
        },
        getValue() {
          return storedValue;
        },
        destroy() {
          storedValue = null;
        }
      };
    },

    commands: {}
  };
}
