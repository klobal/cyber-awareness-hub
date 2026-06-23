<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CD-OS // NAIROBI CENTRAL // COMMAND MATRIX</title>
    <style>
        :root { --bg: #020406; --cyan: #00f0ff; --red: #ff3e3e; --green: #3eff8b; --border: #161b22; --text: #e6edf3; }
        * { box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: 'JetBrains Mono', 'Courier New', monospace; margin: 0; display: flex; height: 100vh; overflow: hidden; }
        
        #nav { width: 320px; border-right: 1px solid var(--border); background: rgba(0,0,0,0.85); display: flex; flex-direction: column; overflow-y: auto; }
        #view { flex: 1; overflow-y: auto; padding: 40px; position: relative; background-image: linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px); background-size: 100% 4px; }
        
        .header { padding: 25px; border-bottom: 1px solid var(--border); color: var(--cyan); font-size: 0.75rem; letter-spacing: 2px; }
        .module { padding: 20px 25px; border-left: 2px solid transparent; cursor: pointer; border-bottom: 1px solid var(--border); transition: 0.2s; }
        .module:hover { background: rgba(0, 240, 255, 0.05); border-left: 3px solid var(--cyan); }
        
        .loading-box { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; }
        .progress-container { width: 300px; height: 4px; background: var(--border); margin-top: 20px; }
        .progress-bar { height: 100%; background: var(--cyan); width: 0%; transition: width 0.3s ease; }
        .telemetry { font-size: 0.7rem; color: var(--green); margin-bottom: 10px; }
        .card { border: 1px solid var(--border); padding: 20px; background: rgba(22, 27, 34, 0.4); margin-bottom: 15px; }
        #status-bar { padding: 15px; font-size: 0.6rem; color: var(--cyan); border-top: 1px solid var(--border); }
    </style>
</head>
<body>

<aside id="nav">
    <div class="header">SYSTEM_OPERATIONAL_MATRIX</div>
    <div id="module-container"></div>
    <div id="status-bar">SYSTEM_READY</div>
    <div style="margin-top: auto; padding: 25px; font-size: 0.7rem; color: #444;">ID: NBI_CENTRAL_SECURE_LINK // ADMIN_LEVEL_01</div>
</aside>

<main id="view">
    <div id="content-area">
        <h1>SYSTEM STANDBY</h1>
        <p>Awaiting data injection from operational modules.</p>
    </div>
</main>

<script src="data/core.js"></script>
<script src="data/emergency.js"></script>
<script src="data/recovery.js"></script>

<script src="app.js"></script>

<script>
    // System boot sequence
    window.addEventListener('load', () => {
        if (typeof initializeSystem === 'function') {
            initializeSystem();
        } else {
            console.error("CRITICAL: Engine (app.js) not found or failed to load.");
        }
    });
</script>

</body>
</html>
