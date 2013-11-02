/*
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  Contributor(s):
 *  - LouCypher (original code)
 */

(function() {
  function $(aId) document.getElementById(aId);

  function clearInitialText() {
    let prettyKey = ShortcutUtils.prettifyShortcut;
    let initialText = Scratchpad.strings.formatStringFromName(
                      "scratchpadIntro1", [prettyKey($("sp-key-run")),
                                           prettyKey($("sp-key-inspect")),
                                           prettyKey($("sp-key-display"))], 3);

    if (Scratchpad.editor.config.value === initialText)
      Scratchpad.editor.config.value = "";
  }

  addEventListener("load", clearInitialText);
  removeEventListener("unload", clearInitialText);
})()
