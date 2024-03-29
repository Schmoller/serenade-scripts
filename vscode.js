serenade.app("vscode").command("terminal", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focus");
});

serenade.app("vscode").command("terminal repeat", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focus");
  await api.pressKey("up");
  await api.pressKey("enter");
});

serenade.app("vscode").command("terminal interrupt", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focus");
  await api.pressKey("c", ["control"]);
});

serenade.app("vscode").command("terminal paste", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.paste");
});

serenade.app("vscode").command("terminal copy", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.copySelection");
});

serenade.app("vscode").command("terminal up", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.scrollUpPage");
});

serenade.app("vscode").command("terminal command up", async (api, matches) => {
  await api.evaluateInPlugin(
    "workbench.action.terminal.scrollToPreviousCommand"
  );
});

serenade.app("vscode").command("terminal down", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.scrollDownPage");
});

serenade
  .app("vscode")
  .command("terminal command down", async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.terminal.scrollToNextCommand");
  });

serenade.app("vscode").command("terminal top", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.scrollToTop");
});

serenade.app("vscode").command("terminal bottom", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.scrollToBottom");
});

serenade.app("vscode").command("terminal clear", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.clear");
});

serenade.app("vscode").command("terminal left", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focusPreviousPane");
});

serenade.app("vscode").command("terminal right", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.focusNextPane");
});

serenade.app("vscode").command("terminal paste", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.paste");
});

serenade.app("vscode").command("terminal copy", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.copySelection");
});

serenade.app("vscode").command("terminal split", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.terminal.split");
});

serenade
  .app("vscode")
  .command("terminal select last command", async (api, matches) => {
    await api.evaluateInPlugin(
      "workbench.action.terminal.selectToPreviousCommand"
    );
  });

serenade.app("vscode").command(
  "save",
  async (api, matches) => {
    await api.pressKey("s", ["control"]);
  },
  {
    chainable: "any",
  }
);

serenade.app("vscode").command("show search", async (api, matches) => {
  await api.evaluateInPlugin("workbench.view.search.focus");
});

serenade.app("vscode").command("clear search", async (api, matches) => {
  await api.evaluateInPlugin("search.action.clearSearchResults");
});

serenade
  .app("vscode")
  .command("global search <%text%>", async (api, matches) => {
    await api.pressKey("f", ["control", "shift"]);
    await api.typeText(matches.text);
  });

serenade.app("vscode").command("next search result", async (api, matches) => {
  await api.evaluateInPlugin("search.action.focusNextSearchResult");
});
serenade
  .app("vscode")
  .command("previous search result", async (api, matches) => {
    await api.evaluateInPlugin("search.action.focusPreviousSearchResult");
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

serenade.app("vscode").command(
  "fold",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.fold");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold all",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldAll");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold one",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldLevel1");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold two",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldLevel2");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold three",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldLevel3");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold four",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldLevel4");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "fold five",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.foldLevel5");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "unfold",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.unfold");
  },
  {
    chainable: "any",
  }
);
serenade.app("vscode").command(
  "unfold all",
  async (api, matches) => {
    await api.evaluateInPlugin("editor.unfoldAll");
  },
  {
    chainable: "any",
  }
);

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
  await api.evaluateInPlugin("editor.action.dirtydiff.next");
});
serenade.app("vscode").command("previous change", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.dirtydiff.previous");
});
serenade.app("vscode").command("back", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.navigateBack");
});
serenade.app("vscode").command("forward", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.navigateForward");
});
serenade.app("vscode").command("show output", async (api, matches) => {
  await api.evaluateInPlugin("workbench.panel.repl.view.focus");
});
serenade.app("vscode").command("start tests", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.run");
});
serenade.app("vscode").command("start this test", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.run-this-test");
});

serenade.app("vscode").command("show params", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.triggerParameterHints");
});

serenade.app("vscode").command("next error", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.marker.nextInFiles");
});
serenade.app("vscode").command("previous error", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.marker.prevInFiles");
});

serenade.app("vscode").command("show hover", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.showHover");
});

serenade.app("vscode").command("suggest", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.quickFix");
});

serenade.app("vscode").command("cursor next", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
});

serenade.app("vscode").command("cursor all", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.selectHighlights");
});

serenade.app("vscode").command("cursor undo", async (api, matches) => {
  await api.evaluateInPlugin("cursorUndo");
});

serenade.app("vscode").command("close all tabs", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.closeAllEditors");
});

serenade.app("vscode").command("close other tabs", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.closeOtherEditors");
});

serenade.app("vscode").command("show explorer", async (api, matches) => {
  await api.evaluateInPlugin("workbench.view.explorer");
});

serenade.app("vscode").command("new folder", async (api, matches) => {
  await api.evaluateInPlugin("explorer.newFolder");
});

serenade.app("vscode").command("new file", async (api, matches) => {
  await api.evaluateInPlugin("explorer.newFile");
});

serenade.app("vscode").command("show git", async (api, matches) => {
  await api.evaluateInPlugin("workbench.view.scm");
});

serenade.app("vscode").command("go to references", async (api, matches) => {
  await api.evaluateInPlugin("references-view.findReferences");
});

serenade.app("vscode").command("next reference", async (api, matches) => {
  await api.evaluateInPlugin("references-view.next");
});

serenade.app("vscode").command("previous reference", async (api, matches) => {
  await api.evaluateInPlugin("references-view.prev");
});

serenade
  .app("vscode")
  .command("go to file references", async (api, matches) => {
    await api.evaluateInPlugin("typescript.findAllFileReferences");
  });

serenade.app("vscode").command("toggle word wrap", async (api, matches) => {
  await api.evaluateInPlugin("editor.action.toggleWordWrap");
});

serenade.app("vscode").command("new window", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.newWindow");
});

serenade.app("vscode").command("show editor", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusActiveEditorGroup");
});

// Bitbucket view
serenade.app("vscode").command("show issues", async (api, matches) => {
  await api.evaluateInPlugin("atlascode.views.bb.issuesTreeView.focus");
});

serenade.app("vscode").command("show pipelines", async (api, matches) => {
  await api.evaluateInPlugin("atlascode.views.bb.pipelinesTreeView.focus");
});

serenade.app("vscode").command("refresh pipelines", async (api, matches) => {
  await api.evaluateInPlugin("atlascode.bb.refreshPipelines");
});

serenade.app("vscode").command("show pull requests", async (api, matches) => {
  await api.evaluateInPlugin("atlascode.views.bb.pullrequestsTreeView.focus");
});

// Test explorer
serenade.app("vscode").command("show tests", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.focus");
});

serenade.app("vscode").command("run all tests", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.run-all");
});

serenade.app("vscode").command("debug test", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.debug-test-at-cursor");
});

serenade.app("vscode").command("run test", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.run-test-at-cursor");
});

serenade
  .app("vscode")
  .command("run all tests in file", async (api, matches) => {
    await api.evaluateInPlugin("test-explorer.run-file");
  });

serenade.app("vscode").command("run tests in file", async (api, matches) => {
  await api.evaluateInPlugin("test-explorer.run-file");
});
