serenade.app("vscode").command("terminal", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focus");
});
serenade.app("vscode").command("save", async (api, matches) => {
  await api.pressKey("s", ["control"]);
});

serenade
  .app("vscode")
  .command("global search <%text%>", async (api, matches) => {
    await api.pressKey("f", ["control", "shift"]);
    await api.typeText(matches.text);
  });

serenade.app("vscode").command("split", async (api, matches) => {
  await api.pressKey("\\", ["control"]);
});

serenade.app("vscode").command("right split", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusRightGroup");
});

serenade.app("vscode").command("left split", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusLeftGroup");
});

serenade.app("vscode").command("move left split", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.moveEditorToPreviousGroup");
});

serenade.app("vscode").command("move right split", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.moveEditorToNextGroup");
});

serenade.app("vscode").command("command", async (api, matches) => {
  await api.pressKey("p", ["control", "shift"]);
});

serenade.app("vscode").command("restart", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.debug.restart");
});

serenade.app("vscode").command("fold all", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldAll");
});
serenade.app("vscode").command("fold one", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldLevel1");
});
serenade.app("vscode").command("fold two", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldLevel2");
});
serenade.app("vscode").command("fold three", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldLevel3");
});
serenade.app("vscode").command("fold four", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldLevel4");
});
serenade.app("vscode").command("fold five", async (api, matches) => {
  await api.evaluateInPlugin("editor.foldLevel5");
});
serenade.app("vscode").command("unfold", async (api, matches) => {
  await api.evaluateInPlugin("editor.unfold");
});
serenade.app("vscode").command("unfold all", async (api, matches) => {
  await api.evaluateInPlugin("editor.unfoldAll");
});

// git commands
serenade.app("vscode").command("git sync", async (api, matches) => {
  await api.evaluateInPlugin("git.sync");
});
serenade.app("vscode").command("git commit", async (api, matches) => {
  await api.evaluateInPlugin("git.commit");
});
serenade.app("vscode").command("git stage", async (api, matches) => {
  await api.evaluateInPlugin("git.stage");
});
serenade.app("vscode").command("git stage all", async (api, matches) => {
  await api.evaluateInPlugin("git.stageAll");
});
serenade.app("vscode").command("git stage tracked", async (api, matches) => {
  await api.evaluateInPlugin("git.stageAllTracked");
});
serenade.app("vscode").command("git stage untracked", async (api, matches) => {
  await api.evaluateInPlugin("git.stageAllUntracked");
});
serenade.app("vscode").command("git unstage", async (api, matches) => {
  await api.evaluateInPlugin("git.unstage");
});
serenade.app("vscode").command("git unstage all", async (api, matches) => {
  await api.evaluateInPlugin("git.unstageAll");
});
serenade.app("vscode").command("git stash", async (api, matches) => {
  await api.evaluateInPlugin("git.stash");
});
serenade.app("vscode").command("git stash all", async (api, matches) => {
  await api.evaluateInPlugin("git.stashIncludeUntracked");
});
serenade.app("vscode").command("git stash pop", async (api, matches) => {
  await api.evaluateInPlugin("git.stashPop");
});
// diff
serenade.app("vscode").command("next change", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.editor.nextChange");
});
serenade.app("vscode").command("previous change", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.editor.previousChange");
});
