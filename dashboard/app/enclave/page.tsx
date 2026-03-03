"use client";

import { Lock } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { GlitchHeading } from "@/components/GlitchHeading";

export default function EnclavePage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-hidden bg-black selection:bg-purple-500/30">
            {/* Aurora Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full h-full glass-panel rounded-[32px] md:rounded-[48px] p-3 flex gap-3 relative z-10 overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Sidebar activeItem="Secure Enclave" />

                <div className="flex-1 rounded-[40px] bg-[#0A0A0A]/50 relative flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                        <Lock className="w-10 h-10 text-white/50" />
                    </div>
                    <GlitchHeading text="Secure Enclave" className="text-3xl lg:text-4xl mb-2" />
                    <p className="text-white/40 max-w-md">
                        This module requires biometric authentication and hardware-level security keys.
                        <br />
                        <span className="text-purple-400 mt-2 block font-mono text-sm">[ Coming Soon in v2.0 ]</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
