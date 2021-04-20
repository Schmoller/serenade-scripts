serenade.app('discord').command('channel <%name%>', async(api, matches) => {
  await api.pressKey('k', ['ctrl']);
  await api.typeText(matches.name);
})
