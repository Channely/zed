/* global sandboxRequest*/
module.exports = {
    goto: function(path, callback) {
        sandboxRequest("zed/session", "goto", [path], callback);
    },
    setAnnotations: function(path, annos, callback) {
        sandboxRequest("zed/session", "setAnnotations", [path, annos], callback);
    },
    getText: function(path, callback) {
        sandboxRequest("zed/session", "getText", [path, ], callback);
    },
    setText: function(path, text, callback) {
        sandboxRequest("zed/session", "setText", [path, text], callback);
    },
    insertAtCursor: function(path, text, callback) {
        sandboxRequest("zed/session", "insertAtCursor", [path, text], callback);
    },
    insert: function(path, pos, text, callback) {
        sandboxRequest("zed/session", "insert", [path, pos, text], callback);
    },
    append: function(path, text, callback) {
        sandboxRequest("zed/session", "append", [path, text], callback);
    },
    getPreceedingIdentifier: function(path, callback) {
        sandboxRequest("zed/session", "getPreceedingIdentifier", [path], callback);
    },
    getAllLines: function(path, callback) {
        sandboxRequest("zed/session", "getAllLines", [path], callback);
    },
    removeInLine: function(path, row, start, end, callback) {
        sandboxRequest("zed/session", "removeInLine", [path, row, start, end], callback);
    },
    removeLines: function(path, start, end, callback) {
        sandboxRequest("zed/session", "removeLines", [path, start, end], callback);
    },
    getSelectionRange: function(path, callback) {
        sandboxRequest("zed/session", "getSelectionRange", [path], callback);
    },
    getSelectionText: function(path, callback) {
        sandboxRequest("zed/session", "getSelectionText", [path], callback);
    },
    getTextRange: function(path, start, end, callback) {
        sandboxRequest("zed/session", "getTextRange", [path, start, end], callback);
    },
    getCursorIndex: function(path, callback) {
        sandboxRequest("zed/session", "getCursorIndex", [path], callback);
    },
    setCursorIndex: function(path, index, callback) {
        sandboxRequest("zed/session", "setCursorIndex", [path, index], callback);
    },
    getCursorPosition: function(path, callback) {
        sandboxRequest("zed/session", "getCursorPosition", [path], callback);
    },
    setCursorPosition: function(path, pos, callback) {
        sandboxRequest("zed/session", "setCursorPosition", [path, pos], callback);
    },
    getScrollPosition: function(path, callback) {
        sandboxRequest("zed/session", "getScrollPosition", [path], callback);
    },
    setScrollPosition: function(path, pos, callback) {
        sandboxRequest("zed/session", "setScrollPosition", [path, pos], callback);
    },
    replaceRange: function(path, range, text, callback) {
        sandboxRequest("zed/session", "replaceRange", [path, range, text], callback);
    },
    isInsertingSnippet: function(path, callback) {
        sandboxRequest("zed/session", "isInsertingSnippet", [path], callback);
    },
    flashMessage: function(path, message, length, callback) {
        sandboxRequest("zed/session", "flashMessage", [path, message, length], callback);
    }
};
