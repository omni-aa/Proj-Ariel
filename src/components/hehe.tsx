import React, { useEffect, useState } from 'react';

interface IpData {
    ip: string;
    country_name?: string;
    city?: string;
    isp?: string;
    time_zone?: {
        name: string;
    };
}

interface DiscordWebhookPayload {
    content?: string;
    embeds?: Array<{
        title: string;
        description: string;
        color: number;
        fields: Array<{
            name: string;
            value: string;
            inline: boolean;
        }>;
        timestamp: string;
    }>;
}

const IPVerification: React.FC = () => {
    const [, setStatus] = useState<string>('Checking IP...');
    const [, setIpAddress] = useState<string>('');

    useEffect(() => {
        const verifyIP = async (): Promise<void> => {
            try {
                setStatus('Getting IP address...');

                // Vite environment variables
                const API_KEY = import.meta.env.VITE_IPGEOLOCATION_API_KEY;
                const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

                // Validate env vars
                if (!API_KEY || API_KEY.includes('your_actual_ipgeolocation_key')) {
                    setStatus('❌ IP Geolocation API key not configured');
                    return;
                }

                if (!WEBHOOK_URL || WEBHOOK_URL.includes('your_actual_discord_webhook')) {
                    setStatus('❌ Discord webhook URL not configured');
                    return;
                }

                // Get IP data
                const ipResponse = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);

                if (!ipResponse.ok) {
                    throw new Error(`HTTP error! status: ${ipResponse.status}`);
                }

                const ipData: IpData = await ipResponse.json();
                setIpAddress(ipData.ip);

                setStatus('Sending to Discord...');

                // Discord payload
                const payload: DiscordWebhookPayload = {
                    embeds: [
                        {
                            title: '🌐 New Visitor Detection',
                            description: 'User visited the homepage',
                            color: 5814783,
                            fields: [
                                {
                                    name: 'IP Address',
                                    value: `\`\`\`${ipData.ip}\`\`\``,
                                    inline: false
                                },
                                {
                                    name: 'Location',
                                    value: `${ipData.city || 'Unknown'}, ${ipData.country_name || 'Unknown'}`,
                                    inline: true
                                },
                                {
                                    name: 'ISP',
                                    value: ipData.isp || 'Unknown',
                                    inline: true
                                },
                                {
                                    name: 'User Agent',
                                    value: `\`\`\`${navigator.userAgent.substring(0, 100)}...\`\`\``,
                                    inline: false
                                },
                                {
                                    name: 'Timestamp',
                                    value: new Date().toLocaleString(),
                                    inline: false
                                }
                            ],
                            timestamp: new Date().toISOString()
                        }
                    ]
                };

                // Send to Discord
                const discordResponse = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!discordResponse.ok) {
                    throw new Error(`Discord webhook failed: ${discordResponse.status}`);
                }

                setStatus('✅ Verification complete');

            } catch (error) {
                console.error('IP verification failed:', error);
                setStatus('❌ Verification failed');
            }
        };

        verifyIP();
    }, []);

    return (
        <div></div>
    );
};

export default IPVerification;