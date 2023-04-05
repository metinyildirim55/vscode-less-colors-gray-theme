import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // extension code here
  vscode.window.showInformationMessage('My extension is now active!');
}

export function deactivate() {
  // cleanup code here
  vscode.window.showInformationMessage('My extension is now deactive!');
}