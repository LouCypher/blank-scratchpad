/*  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  function $(aId) document.getElementById(aId);

  function clearInitialText() {
    var initialText = null;
    try {
      initialText = Scratchpad.strings.GetStringFromName("scratchpadIntro");
    }
    catch (ex) {
      var prettyKey = "DevtoolsHelpers" in window
                        ? DevtoolsHelpers.prettyKey
                        : "LayoutHelpers" in window
                          ? LayoutHelpers.prettyKey
                            : "ShortcutUtils" in window         // Firefox 27+
                              ? ShortcutUtils.prettifyShortcut
                              : SP_Pretty_Key;

      initialText = Scratchpad.strings.formatStringFromName("scratchpadIntro1",
                                                            [prettyKey($("sp-key-run")),
                                                             prettyKey($("sp-key-inspect")),
                                                             prettyKey($("sp-key-display"))],
                                                            3);
    }

    if ("config" in Scratchpad.editor) {  // Firefox 27+
      if (Scratchpad.editor.config.value === initialText)
        Scratchpad.editor.config.value = "";
    }
    else {
      if (Scratchpad.editor._config.initialText === initialText)
        Scratchpad.editor._config.initialText = "";
    }
  }

  addEventListener("load", clearInitialText);
  removeEventListener("unload", clearInitialText);
})()
