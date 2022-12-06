export const keyBindings = {
  handleDelete: {
    key: "Delete",
    handler: function () {
      return false;
    },
  },
  handleShiftDelete: {
    key: "Delete",
    shiftKey: true,
    handler: function () {
      return false;
    },
  },
  handleBackspace: {
    key: "Backspace",
    handler: function () {
      return false;
    },
  },
  handlesShiftBackspace: {
    key: "Backspace",
    shiftKey: true,
    handler: function () {
      return false;
    },
  },
  handlesSuperBackspace: {
    key: "Backspace",
    shortKey: true,
    handler: function () {
      return false;
    },
  },
  handleUndo: {
    key: "Z",
    shortKey: true,
    handler: function () {
      return false;
    },
  },
  tab: {
    key: 9,
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        return false;
      }
    },
  },
  enter: {
    key: "Enter",
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        return false;
      }
    },
  },
  arrowLeft: {
    key: 37,
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        quill.setSelection(range.index, 0);
      }
    },
  },
  arrowUp: {
    key: 38,
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        quill.setSelection(range.index, 0);
      }
    },
  },
  arrowRight: {
    key: 39,
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        quill.setSelection(range.index + range.length, 0);
      }
    },
  },
  arrowDown: {
    key: 40,
    handler: function (range) {
      if (range.length === 0) {
        return true;
      } else if (range.length > 0) {
        quill.setSelection(range.index + range.length, 0);
      }
    },
  },
};
