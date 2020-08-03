const AppConfig = {
  useVConsole: false
}

// 控制webpack相关配置
if (typeof module === 'object' && typeof exports === 'object') {
  module.exports = {
    dropConsole: false
  }
}
