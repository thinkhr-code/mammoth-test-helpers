let storedValue;

export default function stubWysihtml5() {
  const factory = window.wysihtml5 = function() {};

  factory.lang = {
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
  };
  factory.Editor = function() {
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
  };
  factory.commands = {};
}
