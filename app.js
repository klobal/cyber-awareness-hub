// app.js - The Execution Engine

window.initializeSystem = function() {
    // 1. Build the Master Database from your external data files
    // Note: These constants (CORE_DATA, etc.) come from your external files
    window.GuardianDatabase = {
        CORE: typeof CORE_DATA !== 'undefined' ? CORE_DATA : { title: "Error", desc: "CORE_DATA missing" },
        EMERGENCY: typeof EMERGENCY_DATA !== 'undefined' ? EMERGENCY_DATA : { title: "Error", desc: "EMERGENCY_DATA missing" },
        RECOVERY: typeof RECOVERY_DATA !== 'undefined' ? RECOVERY_DATA : { title: "Error", desc: "RECOVERY_DATA missing" }
    };

    // 2. Render the sidebar
    const nav = document.getElementById('module-container');
    nav.innerHTML = '';
    Object.keys(GuardianDatabase).forEach(key => {
        nav.innerHTML += `
            <div class="module" onclick="executeModule('${key}')">
                <div style="font-size: 0.6rem; color: var(--cyan);">// EXEC_MOD</div>
                <div style="font-weight:bold;">${GuardianDatabase[key].title}</div>
            </div>`;
    });

    // 3. Update Status Bar
    const statusBar = document.getElementById('status-bar');
    if (statusBar) {
        statusBar.innerText = `SYSTEM_READY // NODES_ONLINE`;
    }
    
    console.log("MATRIX_INITIALIZED: Operational modules linked.");
};

// 4. Execution Engine
window.executeModule = function(modKey) {
    const data = GuardianDatabase[modKey];
    const content = document.getElementById('content-area');
    
    content.innerHTML = `
        <div class="telemetry"><span class="blink"></span>EXECUTE_PROTOCOL: ${modKey}</div>
        <h1 style="border-bottom: 1px solid var(--cyan); padding-bottom: 10px;">${data.title}</h1>
        <p>${data.desc}</p>
        <div id="protocol-list" style="margin-top: 20px;"></div>
    `;

    if (data.pages) {
        const list = document.getElementById('protocol-list');
        Object.keys(data.pages).forEach(pageKey => {
            const page = data.pages[pageKey];
            list.innerHTML += `
                <div class="card" style="margin-bottom: 10px; cursor: pointer; border-left: 3px solid var(--cyan);" 
                     onclick="loadProtocol('${modKey}', '${pageKey}')">
                    <div style="font-weight: bold; color: var(--cyan);">${page.title}</div>
                </div>
            `;
        });
    }
};

// 5. Protocol Loader
window.loadProtocol = function(modKey, pageKey) {
    const page = GuardianDatabase[modKey].pages[pageKey];
    document.getElementById('content-area').innerHTML = `
        <div class="telemetry"><span class="blink"></span>PROTOCOL_STREAM_ACTIVE</div>
        <h1 style="color: var(--cyan);">${page.title}</h1>
        <div style="background: rgba(0, 240, 255, 0.05); padding: 20px; border: 1px solid var(--cyan);">
            ${page.content}
        </div>
        <button style="margin-top:20px; background:transparent; border:1px solid white; color:white; padding:10px; cursor:pointer;" 
                onclick="executeModule('${modKey}')">RETURN TO MODULE</button>
    `;
};
