serenade.global().command("window left", async (api, matches) => {
  await api.pressKey("left", ["win"]);
});

serenade.global().command("window right", async (api, matches) => {
  await api.pressKey("right", ["win"]);
});

serenade.global().command("window max", async (api, matches) => {
  await api.pressKey("up", ["win"]);
});

serenade.global().command("window min", async (api, matches) => {
  await api.pressKey("pagedown", ["win"]);
});

serenade.global().command("window overview", async (api, matches) => {
  await api.pressKey("f10", ["control"]);
});

serenade.global().command("window <%text%>", async (api, matches) => {
  let command = matches.text;
  if (command == "to" || command == "too") {
    command = "2";
  }

  num = parseInt(command);
  if (isFinite(num)) {
    if (num > 0 && num < 10) {
      await api.pressKey(num.toFixed(0), ["win"]);
    }
  }
  // don't really want to do anything here. but we have to do something or it doesn't work
  await api.pressKey("0", ["win"]);
});
