// for some reason it's called python 3 not terminator
const appName = 'python3';

serenade.global().command('focus terminator', async(api) => {
    await api.focusApplication(appName);
})

serenade.app(appName).key('split right', 'e', ['control', 'shift']);
serenade.app(appName).key('split down', 'o', ['control', 'shift']);

serenade.app(appName).key('new tab', 't', ['control', 'shift']);
serenade.app(appName).key('next tab', 'pagedown', ['control', 'shift']);
serenade.app(appName).key('right tab', 'pagedown', ['control', 'shift']);
serenade.app(appName).key('previous tab', 'pageup', ['control', 'shift']);
serenade.app(appName).key('left tab', 'pageup', ['control', 'shift']);

serenade.app(appName).key('paste', 'v', ['control', 'shift']);
serenade.app(appName).key('copy', 'c', ['control', 'shift']);

serenade.app(appName).key('search', 'f', ['control', 'shift']);
serenade.app(appName).key('zoom', 'x', ['control', 'shift']);
serenade.app(appName).key('close', 'w', ['control', 'shift']);
serenade.app(appName).key('close all', 'q', ['control', 'shift']);

serenade.app(appName).key('terminal left', 'left', ['alt']);
serenade.app(appName).key('terminal right', 'right', ['alt']);
serenade.app(appName).key('terminal up', 'up', ['alt']);
serenade.app(appName).key('terminal down', 'down', ['alt']);
serenade.app(appName).key('terminal next', 'n', ['control', 'shift']);
serenade.app(appName).key('terminal previous', 'p', ['control', 'shift']);

serenade.app(appName).key('terminal title', 'x', ['alt', 'control']);
// tab title seems to close it
serenade.app(appName).key('tab title', 'a', ['alt', 'control']);
serenade.app(appName).key('window title', 'w', ['alt', 'control']);

// general terminal commands
serenade.app(appName).key('interrupt', 'c', ['control']);
serenade.app(appName).key('eof', 'd', ['control']);
serenade.app(appName).key('end of file', 'd', ['control']);
serenade.app(appName).key('suspend', 'z', ['control']);
serenade.app(appName).key('clear screen', 'l', ['control']);

serenade.app(appName).key('undo', '_', ['control']);
serenade.app(appName).key('complete', 'tab');

serenade.app(appName).key('recall', 'r', ['control']);

serenade.app(appName).key('next word', 'f', ['alt']);
serenade.app(appName).key('previous word', 'b', ['alt']);

serenade.app(appName).key('cut before', 'u', ['control']);
serenade.app(appName).key('cut after', 'k', ['control']);
serenade.app(appName).key('delete word', 'backspace', ['control']);

serenade.app(appName).key('scroll down', 'pagedown', ['shift', 'alt']);
serenade.app(appName).key('scroll up', 'pageup', ['shift', 'alt']);
serenade.app(appName).key('scroll', 'pagedown', ['shift', 'alt']);
serenade.app(appName).key('scroll to top', 'home', ['shift', 'alt']);
serenade.app(appName).key('scroll top', 'home', ['shift', 'alt']);
serenade.app(appName).key('scroll to bottom', 'end', ['shift', 'alt']);
serenade.app(appName).key('scroll bottom', 'end', ['shift', 'alt']);

serenade.app(appName).command('find <%thing%>', async(api, matches) => {
    await api.pressKey('f', ['control', 'shift']);
    await api.typeText(matches.thing)
    await api.pressKey('enter')
})

serenade.global().command('display debug', async (api, matches) => {
    console.log('active', await api.getActiveApplication());
    console.log('all', await api.getRunningApplications());
    console.log('installed', await api.getInstalledApplications());
    await api.pressKey('escape');
    
});
