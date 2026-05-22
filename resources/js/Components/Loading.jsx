import { useEffect, useState } from "react";

const Loading = () => {
    const [progress, setProgress] = useState(0);
    const [chipStatus, setChipStatus] = useState("Inicializando");
    const [mainStatus, setMainStatus] = useState("Cargando...");
    const [secondaryStatus, setSecondaryStatus] = useState(
        "Conectando con servidores seguros y estableciendo protocolos...",
    );

    useEffect(() => {
        const stages = [
            {
                progress: 20,
                chip: "Inicializando",
                main: "Cargando...",
                desc: "Conectando con servidores seguros y estableciendo protocolos...",
            },
            {
                progress: 45,
                chip: "Autenticando",
                main: "Validando...",
                desc: "Verificando credenciales de acceso y certificados de seguridad...",
            },
            {
                progress: 75,
                chip: "Sincronizando",
                main: "Sincronizando...",
                desc: "Descargando tus preferencias y optimizando el espacio de trabajo...",
            },
            {
                progress: 95,
                chip: "Finalizando",
                main: "Casi listo",
                desc: "Realizando los últimos ajustes para una experiencia fluida...",
            },
        ];

        let currentStage = 0;
        let timeouts = [];

        function updateStage() {
            if (currentStage < stages.length) {
                const stage = stages[currentStage];
                setProgress(stage.progress);
                setChipStatus(stage.chip);
                setMainStatus(stage.main);
                setSecondaryStatus(stage.desc);

                currentStage++;
                const timeoutId = setTimeout(
                    updateStage,
                    2200 + Math.random() * 1000,
                );
                timeouts.push(timeoutId);
            }
        }

        // Start simulation after component mounts
        const initialTimeout = setTimeout(updateStage, 1000);
        timeouts.push(initialTimeout);

        // Cleanup timeouts on unmount
        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, []);

    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center overflow-hidden bg-mesh">
            {/* Top Decorative Line */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <main className="relative flex flex-col items-center justify-center w-full max-w-4xl px-gutter text-center">
                {/* Background Ambient Glow - Scaled for Desktop */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] animate-pulse-glow" />
                </div>

                {/* Custom Sophisticated Spinner - Scaled up for Desktop */}
                <div className="relative w-32 h-32 mb-xl">
                    {/* Outermost soft pulse */}
                    <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-20" />
                    {/* Main Spinning Ring */}
                    <div className="w-full h-full rounded-full animate-spin spinner-gradient" />
                    {/* Inner Static Glow Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center shadow-2xl">
                            <span
                                className="material-symbols-outlined text-primary text-[32px]"
                                data-icon="sync"
                                data-weight="fill"
                                style={{
                                    fontVariationSettings: '"FILL" 1',
                                }}
                            >
                                sync
                            </span>
                        </div>
                    </div>
                </div>

                {/* Status Content */}
                <div className="space-y-6">
                    <div className="flex flex-col items-center gap-4">
                        <h1
                            className="font-headline-lg text-headline-lg text-on-surface tracking-tight"
                            id="main-status"
                        >
                            {mainStatus}
                        </h1>
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span
                                className="font-label-caps text-label-caps text-primary uppercase tracking-widest"
                                id="chip-status"
                            >
                                {chipStatus}
                            </span>
                        </div>
                    </div>
                    <p
                        className="font-body-md text-body-md text-on-surface-variant max-w-[400px] mx-auto leading-relaxed"
                        id="secondary-status"
                    >
                        {secondaryStatus}
                    </p>
                </div>

                {/* Progress Indicator (Minimalist Line) - Scaled for Desktop */}
                <div className="mt-xl w-64 h-[3px] bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary-container transition-all duration-700 ease-in-out shadow-[0_0_12px_rgba(79,70,229,0.6)]"
                        id="progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </main>

            {/* Visual Identity Background Elements */}
            <div className="fixed bottom-12 left-0 w-full flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-outline-variant/30" />
                <p className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-[0.4em] uppercase">
                    Systems Ready
                </p>
            </div>

            {/* Background Accents */}
            <div className="fixed top-12 left-12 opacity-10 pointer-events-none hidden lg:block">
                <span className="material-symbols-outlined text-[48px] text-primary">
                    security
                </span>
            </div>
            <div className="fixed bottom-12 right-12 opacity-10 pointer-events-none hidden lg:block">
                <span className="material-symbols-outlined text-[48px] text-primary">
                    cloud_done
                </span>
            </div>
        </div>
    );
};

export default Loading;
