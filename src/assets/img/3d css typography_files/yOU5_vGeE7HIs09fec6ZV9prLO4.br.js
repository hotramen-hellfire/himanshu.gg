(function(){var n,t,i=(n=_w._sydPayWallConfig)===null||n===void 0?void 0:n.loadSydneyConvResWithPayWall,r=(t=_w._sydPayWallConfig)===null||t===void 0?void 0:t.useSydneyPayWall;sj_evt.bind("rewready",function(n){if(n&&n.length>=2){var t=n[1].waitlist;t&&t=="2"&&i&&(SydFSCHelper.setSydFSCEligibleState(!0),sj_evt.fire("waitlistUpdate:eligible"),SydFSCHelper.sydPayWallTrace("sj_evt.fire waitlistUpdate:eligible"))}},!0);SydFSCHelper.sydPayWallTrace("_sydPayWallConfig",_w._sydPayWallConfig);r?i?sj_evt.bind("onP1",function(){SydFSCHelper.isSydFSCEligible?(sj_evt.fire("sydFSCLoaded"),SydFSCHelper.sydPayWallTrace("onP1 sj_evt.fire sydFSCLoaded")):(sj_evt.fire("sydFSCPaywallLoaded"),SydFSCHelper.sydPayWallTrace("onP1 sj_evt.fire sydFSCPaywallLoaded"))},!0,100):(sj_evt.fire("sydFSCPaywallLoaded"),SydFSCHelper.sydPayWallTrace("sj_evt.fire sydFSCPaywallLoaded")):sj_evt.bind("convInit:done",function(){sj_evt.fire("sydFSCLoaded");SydFSCHelper.sydPayWallTrace("sj_evt.fire sydFSCLoaded")},!0)})()