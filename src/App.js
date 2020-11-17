import React, { Component } from "react";
import AceEditor from "react-ace";
import Terminal from "xterm";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-monokai";

// import "node_modules/xterm/css/xterm.css";

// function onChange(newVal) {
//   console.log('change', newVal)
// }

let term = new Terminal();
term.open(document.getElementById("terminal"));
term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
export default class Main extends Component {
  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          height="750px"
          width="1300px"
          // onChange={ onChange }
          name="SOMETHING"
          editorProps={{ $blockScrolling: true, $blockSelectEnabled: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
        />
        <div id="terminal">
          let term = new Terminal();
          term.open(document.getElementById("terminal")); term.write("Hello from
          \x1B[1;3;31mxterm.js\x1B[0m $ ");
        </div>
      </div>
    );
  }
}
