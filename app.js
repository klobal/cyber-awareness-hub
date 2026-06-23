// app.js - The Execution Engine
window.executeModule = function(modKey) {
    const data = GuardianDatabase[modKey];
    const content = document.getElementById('content-area');
    
    // Create the tactical view
    content.innerHTML = `
        <div class="telemetry"><span class="blink"></span>EXECUTE_PROTOCOL: ${modKey}</div>
        <h1 style="border-bottom: 1px solid var(--cyan); padding-bottom: 10px;">${data.title}</h1>
        <p>${data.desc}</p>
        <div id="protocol-list" style="margin-top: 20px;"></div>
    `;

    // If the module has specific pages/sub-protocols, render them as tactical buttons
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

// Protocol Loader
window.loadProtocol = function(modKey, pageKey) {
    const page = GuardianDatabase[modKey].pages[pageKey];
    document.getElementById('content-area').innerHTML = `
        <div class="telemetry"><span class="blink"></span>PROTOCOL_STREAM_ACTIVE</div>
        <h1 style="color: var(--cyan);">${page.title}</h1>
        <div style="background: rgba(0, 240, 255, 0.05); padding: 20px; border: 1px solid var(--cyan);">
            ${page.content}
        </div>
        <button style="margin-top:20px; background:transparent; border:1px solid white; color:white; padding:10px;" 
                onclick="executeModule('${modKey}')">RETURN TO MODULE</button>
    `;
};
