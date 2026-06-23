// data/emergency.js
const EMERGENCY_DATA = {
    title: "Emergency Response",
    desc: "Tactical incident response and threat neutralization protocols.",
    pages: {
        "ransomware": { 
            title: "RANSOMWARE_CONTAINMENT", 
            content: "1. ISOLATE: Physically disconnect the network cable or disable WiFi immediately.\n2. PRESERVE: Do not reboot. Do not clear RAM.\n3. LOG: Document the time of infection and file extension changes.\n4. COMMAND: Alert incident lead for decryption attempt or offline restoration." 
        },
        "phishing": { 
            title: "PHISHING_RESPONSE", 
            content: "1. ANALYZE: Extract email headers and identify the originating SMTP server.\n2. ISOLATE: Prevent the user from clicking links or opening attachments.\n3. PURGE: Delete from the server-side to prevent lateral spread.\n4. ROTATE: Immediately force a credential reset for the affected user." 
        },
        "data_leak": { 
            title: "UNAUTHORIZED_DATA_EXFIL", 
            content: "1. TERMINATE: Kill the active socket/process immediately.\n2. LOG: Capture netstat logs to identify the destination IP.\n3. SECURE: Change API keys and service account passwords immediately.\n4. AUDIT: Review system access logs for the last 1 hour." 
        },
        "ddos": { 
            title: "DDoS_MITIGATION", 
            content: "1. IDENTIFY: Check traffic source via firewall logs.\n2. FILTER: Apply geo-blocking or rate-limiting rules.\n3. ROUTE: Redirect traffic through a scrubbing service if available.\n4. SCALE: Provision additional resources to handle the surge." 
        }
    }
};
