// data/core.js
const CORE_DATA = {
    // 1. SYSTEM IDENTITY (The Matrix Metadata)
    metadata: {
        system_name: "CD-OS // NAIROBI CENTRAL",
        version: "2.6.0-STABLE",
        operator: "ADMIN_LEVEL_01",
        location: "NBI_CENTRAL_SECURE_LINK",
        last_sync: new Date().toISOString()
    },

    // 2. DEFENSE POSTURE (Global configuration)
    defense_posture: {
        threat_level: "ELEVATED",
        active_triage: true,
        auto_logging: "ENABLED",
        encryption: "AES-256-GCM"
    },

    // 3. GLOBAL ASSET REGISTRY (Who/What are we protecting?)
    asset_registry: {
        nodes: ["NBI_CENTRAL_CORE_01", "NBI_MUST_LAB_07", "MOBILE_PAYMENT_GATEWAY"],
        protected_sectors: ["Safaricom", "KRA_INTEGRATION", "Citizen_Guidance"],
        critical_uptime: "99.99%"
    },

    // 4. TRIAGE VECTORS (Standard Operating Procedures)
    triage_levels: {
        LEVEL_1: { label: "MINOR", action: "Log and Observe" },
        LEVEL_2: { label: "CRITICAL", action: "Isolate and Contain" },
        LEVEL_3: { label: "IMMEDIATE", action: "Total System Lockdown" }
    },

    // 5. OPERATIONAL UTILITIES (Functions available to all modules)
    utilities: {
        getTimestamp: () => new Date().toLocaleTimeString(),
        generateLog: (msg) => `[${new Date().toLocaleTimeString()}] // LOG: ${msg}`
    }
};
