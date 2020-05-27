import React from "react";
const VSCSetup = () => {
  const vsCodeData = [
    {
      icon: "",
      title: "Auto Close Tag",
      author: "codestream",
      url:
        "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
      summary: "automatically close HTML tags.",
    },
    {
      icon: "",
      title: "Auto Rename Tag",
      author: "Jun Han",
      url:
        "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
      summary: "to automatically change matching HTML tags",
    },
    {
      icon: "",
      title: "Color Highlight to",
      author: "Sergii Naumov",
      url:
        "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",
      summary: "as the name says, highlight colors in CSS",
    },
    {
      icon: "",
      title: "Paste and Indent",
      author: "g3rry",
      url:
        "https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent",
      summary: "to automatically indent pasted code.",
    },
    {
      icon: "",
      title: "Path Intellisense",
      author: "Christian Kohler",
      url:
        "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
      summary: "to autocomplete filenames.",
    },
    {
      icon: "",
      title: "Prettier",
      author: "Esben Petersen",
      url:
        "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
      summary: "to automatically format code.",
    },
  ];

  const snippet = `{
        "workbench.colorTheme": "Oceanic Next (dimmed bg)",
        "files.autoSave": "onFocusChange",
        "editor.minimap.enabled": true,
        "workbench.statusBar.visible": true,
        "workbench.activityBar.visible": true,
        "editor.formatOnSave": false,
    
        "workbench.colorCustomizations": {
        "statusBar.background": "#333333",
        "statusBar.noFolderBackground": "#333333",
        "statusBar.debuggingBackground": "#263238"
        },
        "editor.fontSize": 16,
    
        "css.validate": false,
        "scss.validate": false,
        "less.validate": false,
        "editor.wordWrap": "on"
    }`;
  return (
    <div className="container page ">
      <h2 className="center-col heading-secondary center  ">
        Visual Studio Code Setup
      </h2>
      <div className="center-col ">
        <h2>Settings</h2>{" "}
        <p>
          If you want your editor to work and look exactly the same way as mine
          does in the course videos, you can copy these settings to your own
          settings file. Just go to settings in VSCode, and on the right side,
          you can paste this code.
        </p>
        <pre>
          <code>{snippet}</code>
        </pre>
      </div>
      ;
    </div>
  );
};

export default VSCSetup;
