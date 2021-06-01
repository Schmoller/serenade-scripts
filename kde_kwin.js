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

serenade.global().key("window one", "1", ["win"]);
serenade.global().key("window two", "2", ["win"]);
serenade.global().key("window three", "3", ["win"]);
serenade.global().key("window four", "4", ["win"]);
serenade.global().key("window five", "5", ["win"]);
serenade.global().key("window six", "6", ["win"]);
serenade.global().key("window seven", "7", ["win"]);
serenade.global().key("window eight", "8", ["win"]);
serenade.global().key("window nine", "9", ["win"]);
