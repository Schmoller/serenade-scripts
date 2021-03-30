serenade.app("vscode").command("terminal", async (api, matches) => {
  await api.pressKey("home", ["shift", "alt"]);
});

serenade.app("vscode").command("open terminal", async (api, matches) => {
  await api.pressKey("j", ["control"]);
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
  await api.pressKey("8", ["control", "shift", "alt"]);
});

serenade.app("vscode").command("left split", async (api, matches) => {
  await api.pressKey("7", ["control", "shift", "alt"]);
});

serenade.app("vscode").command("move left split", async (api, matches) => {
  await api.pressKey("left", ["control", "alt"]);
});

serenade.app("vscode").command("move right split", async (api, matches) => {
  await api.pressKey("right", ["control", "alt"]);
});

serenade.app("vscode").command("command", async (api, matches) => {
  await api.pressKey("p", ["control", "shift"]);
});

serenade.app("vscode").command("restart", async (api, matches) => {
  await api.pressKey("f5", ["control", "shift"]);
});
serenade.app("vscode").command("git push", async (api, matches) => {
  await api.runShell("git", ["push"]);
});

serenade.app("vscode").command("collapse all", async (api, matches) => {
  await api.pressKey("0", ["control", "k"]);
});

serenade.app("vscode").command("collapse all", async (api, matches) => {
  await api.pressKey("0", ["control", "k"]);
});

serenade.app("vscode").command("collapse one", async (api, matches) => {
  await api.pressKey("1", ["control", "k"]);
});

serenade.app("vscode").command("collapse two", async (api, matches) => {
  await api.pressKey("2", ["control", "k"]);
});

serenade.app("vscode").command("collapse three", async (api, matches) => {
  await api.pressKey("3", ["control", "k"]);
});

serenade.app("vscode").command("uncollapse", async (api, matches) => {
  await api.pressKey("j", ["control", "k"]);
});
