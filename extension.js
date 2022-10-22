const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('"auto-save" extension is now active!');

	let disposable = vscode.commands.registerCommand('auto-save.enableSave', function () {
		
		const configuration = vscode.workspace.getConfiguration()

		const target = vscode.ConfigurationTarget.Workspace  // Update the setting locally
		const overrideInLanguage = true  // Update the setting in the scope of the language

		// Set the autosave function on
		configuration.update('files.autoSave', 'afterDelay', target, overrideInLanguage)

		// Display a message box to the user
		vscode.window.showInformationMessage('Files will be saved automatically!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
