/*
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

(function() {
  function clearInitialText() {
    var initialText = null;
    try {
      initialText = Scratchpad.strings.GetStringFromName("scratchpadIntro");
    } catch(ex) {
      var prettyKey = ("SP_Pretty_Key" in window) ? SP_Pretty_Key
                                                  : LayoutHelpers.prettyKey;

      initialText =  Scratchpad.strings.formatStringFromName(
        "scratchpadIntro1",
        [prettyKey(document.getElementById("sp-key-run")),
         prettyKey(document.getElementById("sp-key-inspect")),
         prettyKey(document.getElementById("sp-key-display"))], 3);
    }

    if (Scratchpad.editor._config.initialText == initialText) {
      Scratchpad.editor._config.initialText = "";
    }
  }

  addEventListener("load", clearInitialText, false);
  removeEventListener("unload", clearInitialText, false);

})()