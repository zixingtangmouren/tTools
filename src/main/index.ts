import { app } from 'electron';
import setup from './setup';

app.whenReady().then(() => {
  setup();
});

app.on('window-all-closed', () => {
  // 只要不是 MacOS，就退出应用
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  //
});
