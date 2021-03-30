
serenade.app('firefox').key('toggle cursor', 'f7');
serenade.app('firefox').key('toggle reader', 'r', ['control', 'alt']);
serenade.app('firefox').key('navigate', 'f6');

serenade.app('firefox').key('find', 'f', ['control']);
serenade.app('firefox').key('find next', 'g', ['control']);
serenade.app('firefox').key('find previous', 'f3', ['shift']);

serenade.app('firefox').key('start of file', 'home', ['control']);
serenade.app('firefox').key('start of line', 'home');
serenade.app('firefox').key('end of file', 'end', ['control']);
serenade.app('firefox').key('end of line', 'end');

serenade.app('firefox').key('left tab', 'pageup', ['control']);
serenade.app('firefox').key('right tab', 'pagedown', ['control']);
// This doesn't seem to work
// for (let i = 1; i <= 8; i++) {
//     serenade.app('firefox').key(`tab ${i}`, i.toFixed(0), ['alt']);
// }

serenade.app('firefox').key('move tab left', 'pageup', ['control', 'shift']);
serenade.app('firefox').key('move tab right', 'pagedown', ['control', 'shift']);

serenade.app('firefox').command('link <%name%>', async (api, matches) => {
    await api.pressKey('\'');
    await api.typeText(matches.name);
    await api.pressKey('escape');
});
serenade.app('firefox').command('go to <%name%>', async (api, matches) => {
    await api.pressKey('/');
    await api.typeText(matches.name);
    await api.pressKey('escape');
});
